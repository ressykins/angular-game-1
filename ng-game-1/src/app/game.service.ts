import { Injectable } from '@angular/core';
import { Item } from './_interfaces/item';
import { Bow, Crossbow, EnchantedBow, EnchantedCrossbow, EnchantedIronAxe, EnchantedIronSword, EnchantedStoneAxe, EnchantedStoneSword, EnchantedWoodenAxe, EnchantedWoodenSword, IronAxe, IronSword, StoneAxe, StoneSword, WoodenAxe, WoodenSword } from './_items/weapons';
import { Ale, Apple, BakedPotato, Bandage, Beetroot, BeetrootSoup, Bread, Button, Cake, Carrot, Cobweb, Cocktail, CookedChicken, CookedFish, CookedPorkchop, CookedRabbit, Cookie, Egg, Flashbang, GoldenApple, GoldenCarrot, Grenade, HealPotI, HealPotII, HealPotIII, HoneyBottle, Incendiary, MelonSlice, Milk, MysteriousArtifact, Nemo, PoisonousPotato, Potato, Pufferfish, PumpkinPie, RawBeef, RawChicken, RawFish, RawPorkchop, RawRabbit, RottenFlesh, Snowball, Steak, SuspiciousStew, SweetBerries, VegetableJuice, WaterBottle, WaterBucket } from './_items/consumables';
import { Bleeding, Dead, Healthy, Normal, Sick, Tipsy } from './_statusEffects/statusEffects';
import { Bone, Bowl, BrownMushroom, Bucket, Coal, CocoaBeans, EnchantedBook, GlassBottle, GlowstoneDust, GoldIngot, Gunpowder, IronIngot, Leather, NetherWart, Pumpkin, RedMushroom, RedstoneDust, Stick, Stone, StringItem, SugarCane, Wheat } from './_items/materials';
import { StatusEffect } from './_interfaces/statuseffect';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { EnchantedFishingRod, EnchantedHoe, EnchantedPickaxe, EnchantedShovel, FishingRod, Hoe, MedKit, Pickaxe, Shovel, SmallBag } from './_items/tools';
import { ChainBoots, ChainChestplate, ChainHelmet, ChainLeggings, IronBoots, IronChestplate, IronHelmet, IronLeggings, LeatherBoots, LeatherCap, LeatherPants, LeatherTunic, ZombieHead } from './_items/armor';
import { CraftableList, ItemList } from './_items/itemList';
import { Enemy } from './_interfaces/enemy';
import { PumpkinZombie, SwordZombie, Zombie } from './_mobs/enemies';

@Injectable({
  providedIn: 'root'
})
export class GameService {





  /// player vitals
  public playerName: string = 'Survivor';

  public $playerHealth: BehaviorSubject<number> = new BehaviorSubject<number>(100);
  public set setPlayerHealth(value: number) {
    if (this.playerStatus == Bleeding) {
      console.log('You are bleeding!');
    }
    else {
      this.$playerHealth.next(value);
      this.checkPlayer();
    }
  }
  public get playerHealth(): Observable<number> {
    return this.$playerHealth.asObservable();
  }

  public $playerHunger: BehaviorSubject<number> = new BehaviorSubject<number>(100);
  public set setPlayerHunger(value: number) {
    if (this.playerStatus == Sick) {
      console.log('You are sick!');
    }
    else {
      this.$playerHunger.next(value);
      this.currentSpeed = Math.floor(this.$playerHunger.value * 0.2);
      this.checkPlayer();
    }
  }
  public get playerHunger(): Observable<number> {
    return this.$playerHunger.asObservable();
  }

  public $playerThirst: BehaviorSubject<number> = new BehaviorSubject<number>(100);
  public set setPlayerThirst(value: number) {
    this.$playerThirst.next(value);
    this.checkPlayer();
  }
  public get playerThirst(): Observable<number> {
    return this.$playerThirst.asObservable();
  }


  // crafting and inventory 
  public $playerInventory: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);
  public playerInventory = this.$playerInventory.asObservable();
  public inventoryWeight: number = 0;
  public inventoryMax: number = 18;

  public craftingList: Item[] = CraftableList;
  public itemList: Item[] = ItemList;
  public $craftableItems: BehaviorSubject<[Item,boolean[]][]> = new BehaviorSubject<[Item,boolean[]][]>([]);
  public craftableItems = this.$craftableItems.asObservable();


  public playerStatus: StatusEffect = Normal;
  public playerStage: number = 1;

  // equipment
  public equippedWeapon: Item | null;
  public equippedHead: Item | null;
  public equippedChest: Item | null;
  public equippedLegs: Item | null;
  public equippedBoots: Item | null;
  public currentDamage: number = 20; // base damage
  public currentDefense: number = 0; // base defense
  public currentSpeed: number = 20; // base speed at 100 hunger















  constructor() { }

  /// CRUD ////////////////////////////////////////////////////////////////////////////

  // when an item is added to inventory, add any recipes that contain that item as a component.
  public addRecipe(item: Item): void {
    for (let cItem of this.craftingList) {
      if (cItem.components?.includes(item) && !this.$craftableItems.value.find((i : [Item, boolean[]]) => i[0] == cItem)) this.$craftableItems.next([...this.$craftableItems.value, [cItem, Array(cItem.components.length).fill(false)]]);
    }
    this.updateRecipes();
  }

  // check current recipes. remove any that are no longer valid
  public updateRecipes(): void {
      for (let i = 0; i < this.$craftableItems.value.length; i++) {
        let currInventory: Item[] = [...this.$playerInventory.value];
        for (let j = 0; j < this.$craftableItems.value[i][0].components!.length; j++) {
          if (currInventory.includes(this.$craftableItems.value[i][0].components![j])) {
            currInventory.splice(currInventory.indexOf(this.$craftableItems.value[i][0].components![j]), 1);
            this.$craftableItems.value[i][1][j] = true; 
          }
          else this.$craftableItems.value[i][1][j] = false; 
        }
      }

      let updatedCrafting = this.$craftableItems.value.filter((i : [Item,boolean[]]) => !i[1].every(i => i == false));
      this.$craftableItems.next(updatedCrafting);
  }

  public addItem(item: Item): void {
    this.inventoryWeight += item.weight;
    item.inInventory = 'grayedOutItem';
    this.$playerInventory.next([...this.$playerInventory.value, item]);
    this.addRecipe(item);
  }

  public removeItem(index: number): void {
    let removedItem = this.$playerInventory.value[index]
    this.inventoryWeight -= removedItem.weight;
    this.$playerInventory.value.splice(index, 1);
    this.$playerInventory.next(this.$playerInventory.value);
    this.updateRecipes();
  }

  public updateItem(index: number, newItem: Item): void {
    this.$playerInventory.value[index] = newItem;
    this.$playerInventory.next(this.$playerInventory.value);
    this.addRecipe(newItem);
    this.updateRecipes();
  }

  public useDurability(index: number): void {
    if (this.$playerInventory.value[index].durability) {
      this.$playerInventory.value[index].durability = (this.$playerInventory.value[index].durability ?? 1) - 1;
    }
    if (this.$playerInventory.value[index].durability == 0) this.removeItem(index);
    else this.$playerInventory.next(this.$playerInventory.value);
  }

  public equipItem(item: Item, index: number): boolean {
    switch(item.type) {
      case 'Head Armor':
        if (this.equippedHead) return false;
        this.equippedHead = item;
        this.currentDefense += item.defense ?? 0;
        break;
      case 'Body Armor':
        if (this.equippedChest) return false;
        this.equippedChest = item;
        this.currentDefense += item.defense ?? 0;
        break;
      case 'Leg Armor':
        if (this.equippedLegs) return false;
        this.equippedLegs = item;
        this.currentDefense += item.defense ?? 0;
        break;
      case 'Boot Armor':
        if (this.equippedBoots) return false;
        this.equippedBoots = item;
        this.currentDefense += item.defense ?? 0;
        break;
      default:
        if (this.equippedWeapon) return false;
        this.equippedWeapon = item;
        this.currentDamage = item.damage ?? 2;
        break;
    }
    this.removeItem(index);
    return true;
  }

  public unequipItem(item: Item) {
    switch(item.type) {
      case 'Head Armor':
        this.currentDefense -= item.defense ?? 0;
        this.addItem(this.equippedHead ?? Bone);
        this.equippedHead = null;
        break;
      case 'Body Armor':
        this.currentDefense -= item.defense ?? 0;
        this.addItem(this.equippedChest ?? Bone);
        this.equippedChest = null;
        break;
      case 'Leg Armor':
        this.currentDefense -= item.defense ?? 0;
        this.addItem(this.equippedLegs ?? Bone);
        this.equippedLegs = null;
        break;
      case 'Boot Armor':
        this.currentDefense -= item.defense ?? 0;
        this.addItem(this.equippedBoots ?? Bone);
        this.equippedBoots = null;
        break;
      default:
        this.currentDamage = 20;
        this.addItem(this.equippedWeapon ?? Bone);
        this.equippedWeapon = null;
        break;
    }
  }

  public createPlayer(items: Item[], name: string): void {
    this.playerName = name;
    this.addItem(WoodenSword);
    this.addItem(WaterBottle);
    for (let item of items) this.addItem(item);
  }

  public changeName(name: string): void {
    if (name.length < 1) this.playerName = 'Survivor';
    else this.playerName = name;
  }

  public changeStatus(status: string): void {
    switch(status) {
      case 'Normal': 
        this.playerStatus = Normal;
        break;
      case 'Bleeding':
        this.playerStatus = Bleeding;
        break;
      case 'Sick':
        this.playerStatus = Sick;
        break;
      default:
        console.log('invalid status');
    }
  }

  public changeValue(value: number, prop: string): void {
    switch(prop) {
      case 'Health':
        if (value < 0 || isNaN(value) ) this.setPlayerHealth = 0;
        else if (value > 100) this.setPlayerHealth = 100;
        else this.setPlayerHealth = value;
        break;
      case 'Hunger':
        if (value < 0 || isNaN(value) ) this.setPlayerHunger = 0;
        else if (value > 100) this.setPlayerHunger = 100;
        else this.setPlayerHunger = value;
        break;
      case 'Thirst':
        if (value < 0 || isNaN(value) ) this.setPlayerThirst = 0;
        else if (value > 100) this.setPlayerThirst = 100;
        else this.setPlayerThirst = value;
        break;
      default: 
        console.log('Huh? How did you get here?');
    }
  }

  public giveItem(name: string): boolean {
    let allItems = ItemList;
    for (let item of allItems) {
      if (item.name.toLowerCase() == name.toLowerCase()) {
        this.addItem(item);
        return true;
      }
    }
    return false;

  }

  public checkPlayer(): void {
    if (this.$playerHealth.value <= 0 || this.$playerHunger.value <= 0 || this.$playerThirst.value <= 0) this.playerStatus = Dead;
  }
  



























  /// ACTIONS ////////////////////////////////////////////////////////////////////////////

  public useConsumable(item: Item, index: number): boolean {
    if (item.food) {
      if (this.$playerHunger.value == 100 && item.hunger && item.hunger > 0) return false;
      switch(item.food) {
        case 'healing':
          if ((item == Bandage || item == HoneyBottle) && this.playerStatus == Bleeding) this.playerStatus = Normal; 
          if ((item == Milk || item == HoneyBottle) && this.playerStatus == Sick) this.playerStatus = Normal;
          if (item == Ale && this.playerStatus == Normal) this.playerStatus = Tipsy;
          if (item == VegetableJuice) this.playerStatus = Healthy;
          break;
        default:
      }
      if (item.health) this.changeValue(this.$playerHealth.value + item.health, 'Health');
      if (item.hunger) this.changeValue(this.$playerHunger.value + item.hunger, 'Hunger');
      if (item.thirst) this.changeValue(this.$playerThirst.value + item.thirst, 'Thirst');
    }
    else if (item.combat) {
      if (!this.inCombat) return false;
    }
    this.removeItem(index);
    return true;
  }














  /// COMBAT SYSTEM ////////////////////////////////////////////////////////////////////////////

  
  public sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

  public inCombat: boolean = false;
  public combatEnemies: Enemy[] = [];
  public combatLog: string[][] = [];
  public analyzedEnemies: Enemy[] = [];
  public awaitTurn: boolean = false;
  public numTurns: number = 0;

  public enterBattle(enemies: Enemy[], isEvent: boolean) {
    this.inCombat = true;
    this.combatLog = [];
    this.numTurns = 0;
    for (let enemy of enemies) this.combatEnemies.push(JSON.parse(JSON.stringify(enemy)));
    let encounterMsg: string = 'You encounter the ' + this.combatEnemies[0].enemyName;
    (this.combatEnemies.length > 1) ? encounterMsg += ' and its company.' : encounterMsg += '.';
    this.combatLog.push(['msgConsole', encounterMsg]);
  }

  public async combatStatus() {
    for (let i = 0; i < this.combatEnemies.length; i++) {
      if (this.combatEnemies[i].enemyHealth < 1 && !this.combatEnemies[i].enemyDefeated) {
        await this.sleep(1000);
        this.combatLog.push(['msgConsole', this.combatEnemies[i].enemyName + ' [' + i + '] was defeated!']);
        this.combatEnemies[i].enemyDefeated = true;
      }
    }
    if (this.combatEnemies.filter((enemy: Enemy) => !enemy.enemyDefeated).length < 1) {
      this.combatLog.push(['msgConsole', '!!! VICTORY !!!']);
    }
  }

  public async startTurn(target: number, intent: string) {
    this.awaitTurn = true;
    // setup turn order
    let turnOrder: [number,number][] = [];
    let playerTurn: [number,number] = (this.equippedWeapon && this.equippedWeapon.weapon! == 'Crossbow') ? [-1, -1] : [-1, this.currentSpeed];
    turnOrder.push(playerTurn);
    for (let i = 0; i < this.combatEnemies.length; i++) turnOrder.push([i,this.combatEnemies[i].enemySpeed]); 
    turnOrder.sort((a: [number, number], b: [number, number]) => b[1] - a[1]);

    
    this.numTurns++;
    this.combatLog.push(['msgConsole', '--=[ TURN ' + this.numTurns + ' ]=--']);
    // start turn
    for (let turn of turnOrder) {
      // player action
      if (turn[0] == -1) {
        switch(intent) {
          case 'fight':
            await this.useAttack(target);
            break; 
          default:
            break;
        }
      }
      else if(!this.combatEnemies[turn[0]].enemyDefeated) await this.enemyAction(turn[0]);
      await this.sleep(1000);
    }
    this.awaitTurn = false;
  }



  public async enemyAction(index: number): Promise<boolean> {
    let actionRoll: number = Math.floor(Math.random() * 101);
    let chosenAction: string = '';
    for (let action of this.combatEnemies[index].enemyActions) {
      if (actionRoll < action[1]) {
        chosenAction = action[0];
        break;
      }
    }

    switch (chosenAction) {
      case 'Attack': // basic attack
        let missRoll: number = Math.floor(Math.random() * 101);
        let speedDiff: number = (this.currentSpeed - this.combatEnemies[index].enemySpeed) < 0 ? 0 : (this.currentSpeed - this.combatEnemies[index].enemySpeed);
        if (missRoll < (5 + speedDiff)) {
          this.combatLog.push(['msgEnemy', this.combatEnemies[index].enemyName + ' [' + index + '] attacks! Just missed!']);
          return true;
        }
        var critRoll: number = Math.floor(Math.random() * 101);
        var damage: number = this.combatEnemies[index].enemyDamage;

        if (critRoll < 10) damage *= 1.5;
        damage = Math.floor(damage * (1 - (this.currentDefense * 0.008)));
        damage < 1 ? this.changeValue(this.$playerHealth.value - 1, 'Health') : this.changeValue(this.$playerHealth.value - damage, 'Health');

        if (critRoll < 10) this.combatLog.push(['msgEnemy', this.combatEnemies[index].enemyName + ' [' + index + '] attacks! CRITICAL HIT! Dealt *' + damage + '* damage to ' + this.playerName + '!']);
        else this.combatLog.push(['msgEnemy', this.combatEnemies[index].enemyName + ' [' + index + '] attacks! Dealt *' + damage + '* damage to ' + this.playerName + '!']);
        this.combatStatus();
        break;
    }
    return true;
  }



  public async useAttack(index: number): Promise<boolean> {
    // when no weapon is equipped
    if (!this.equippedWeapon) {
      let missRoll: number = Math.floor(Math.random() * 101);
      let speedDiff: number = (this.combatEnemies[index].enemySpeed - this.currentSpeed) < 0 ? 0 : (this.combatEnemies[index].enemySpeed - this.currentSpeed);
      if (missRoll < (5 + speedDiff)) {
        this.combatLog.push(['msgPlayer', this.playerName + ' throws a punch! But they missed...']);
        return true;
      }

      let damage: number = Math.floor(this.currentDamage * (1 - (this.combatEnemies[index].enemyDefense * 0.008)));
      damage < 1 ? this.combatEnemies[index].enemyHealth -= 1 : this.combatEnemies[index].enemyHealth -= damage;
      this.combatLog.push(['msgPlayer', this.playerName + ' throws a punch! Dealt *' + damage + '* damage to ' + this.combatEnemies[index].enemyName + ' [' + index + ']!']);
      this.combatStatus();
      return true;
    }

    else {
      switch(this.equippedWeapon.weapon) {
        case 'Sword':
          var missRoll: number = Math.floor(Math.random() * 101);
          var speedDiff: number = (this.combatEnemies[index].enemySpeed - this.currentSpeed) < 0 ? 0 : (this.combatEnemies[index].enemySpeed - this.currentSpeed);
          if (missRoll < (10 + speedDiff)) {
            this.combatLog.push(['msgPlayer', this.playerName + ' swings their sword! But they missed...']);
            return true;
          }

          var critRoll: number = Math.floor(Math.random() * 101);
          var damage: number = this.currentDamage;
          var enchantCrit = this.equippedWeapon.name.includes('Enchanted') ? 10 : 0;

          if (critRoll < (10 + enchantCrit)) damage *= 1.5;
          damage = Math.floor(damage * (1 - (this.combatEnemies[index].enemyDefense * 0.008)));
          damage < 1 ? this.combatEnemies[index].enemyHealth -= 1 : this.combatEnemies[index].enemyHealth -= damage;

          if (critRoll < (10 + enchantCrit)) this.combatLog.push(['msgPlayer', this.playerName + ' swings their sword! CRITICAL HIT! Dealt *' + damage + '* damage to ' + this.combatEnemies[index].enemyName + ' [' + index + ']!']);
          else this.combatLog.push(['msgPlayer', this.playerName + ' swings their sword! Dealt *' + damage + '* damage to ' + this.combatEnemies[index].enemyName + ' [' + index + ']!']);
          this.combatStatus();
          break;



        case 'Axe':
          this.combatLog.push(['msgPlayer', this.playerName + ' cleaves with their axe!']);
          for (let i = 0; i < this.combatEnemies.length; i++) {
            await this.sleep(1000);
            if (!this.combatEnemies[i].enemyDefeated) {
              let missRoll: number = Math.floor(Math.random() * 101);
              let speedDiff: number = (this.combatEnemies[i].enemySpeed - this.currentSpeed) < 0 ? 0 : (this.combatEnemies[i].enemySpeed - this.currentSpeed);
              if (missRoll < (15 + speedDiff)) {
                this.combatLog.push(['msgPlayer', 'Missed ' + this.combatEnemies[i].enemyName + ' [' + i + ']!']);
              }
              else {
                let critRoll: number = Math.floor(Math.random() * 101);
                let damage: number = this.currentDamage;
                if (this.equippedWeapon.name.includes('Enchanted')) damage += this.combatEnemies[i].enemyHealth <= (Math.floor(this.combatEnemies[i].enemyMaxHealth / 2)) ? 20 : 0;
  
                if (critRoll < 10) damage *= 1.5;
                damage = Math.floor(damage * (1 - (this.combatEnemies[i].enemyDefense * 0.008)));
                damage < 1 ? this.combatEnemies[i].enemyHealth -= 1 : this.combatEnemies[i].enemyHealth -= damage;
      
                if (critRoll < 10) this.combatLog.push(['msgPlayer', 'CRITICAL HIT! Dealt *' + damage + '* damage to ' + this.combatEnemies[i].enemyName + ' [' + i + ']!']);
                else this.combatLog.push(['msgPlayer', 'Dealt *' + damage + '* damage to ' + this.combatEnemies[i].enemyName + ' [' + i + ']!']);
                this.combatStatus();
              }
            }
          }
          break;



          case 'Bow':
            this.combatLog.push(['msgPlayer', this.playerName + ' aims with their bow!']);
            for (let i = 0; i < 3; i++) {
              await this.sleep(1000);

              let availableTargets: number[] = [];
              for (let i = 0; i < this.combatEnemies.length; i++) if (!this.combatEnemies[i].enemyDefeated) availableTargets.push(i);

              if (availableTargets.length > 0) {
                let target: number = availableTargets[Math.floor(Math.random() * availableTargets.length)];

                let missRoll: number = Math.floor(Math.random() * 101);
                let speedDiff: number = (this.combatEnemies[target].enemySpeed - this.currentSpeed) < 0 ? 0 : (this.combatEnemies[target].enemySpeed - this.currentSpeed);
                if (missRoll < (20 + speedDiff)) {
                  this.combatLog.push(['msgPlayer', 'Missed ' + this.combatEnemies[target].enemyName + ' [' + target + ']!']);
                }
                else {
                  let critRoll: number = Math.floor(Math.random() * 101);
                  let damage: number = this.currentDamage;
                  if (this.equippedWeapon.name.includes('Enchanted')) damage += this.combatEnemies[target].enemyHealth >= (Math.floor(this.combatEnemies[target].enemyMaxHealth / 2)) ? 20 : 0;
  
                  if (critRoll < 10) damage *= 1.5;
                  damage = Math.floor(damage * (1 - (this.combatEnemies[target].enemyDefense * 0.008)));
                  damage < 1 ? this.combatEnemies[target].enemyHealth -= 1 : this.combatEnemies[target].enemyHealth -= damage;
  
                  if (critRoll < 10) this.combatLog.push(['msgPlayer', 'CRITICAL HIT! Dealt *' + damage + '* damage to ' + this.combatEnemies[target].enemyName + ' [' + target + ']!']);
                  else this.combatLog.push(['msgPlayer', 'Dealt *' + damage + '* damage to ' + this.combatEnemies[target].enemyName + ' [' + target + ']!']);
                  this.combatStatus();
                }
              }
            }
            break;
          


          case 'Crossbow':
            var critRoll: number = Math.floor(Math.random() * 101);
            var damage: number = this.currentDamage;
  
            if (critRoll < 10) damage *= 1.5;
            if (!this.equippedWeapon.name.includes('Enchanted')) damage = Math.floor(damage * (1 - (this.combatEnemies[index].enemyDefense * 0.008)));
            damage < 1 ? this.combatEnemies[index].enemyHealth -= 1 : this.combatEnemies[index].enemyHealth -= damage;
  
            if (critRoll < 10) this.combatLog.push(['msgPlayer', this.playerName + ' fires their crossbow! CRITICAL HIT! Dealt *' + damage + '* damage to ' + this.combatEnemies[index].enemyName + ' [' + index + ']!']);
            else this.combatLog.push(['msgPlayer', this.playerName + ' fires their crossbow! Dealt *' + damage + '* damage to ' + this.combatEnemies[index].enemyName + ' [' + index + ']!']);
            this.combatStatus();
            break;
      }

      this.equippedWeapon.durability! -= 1;
      if (this.equippedWeapon.durability! < 1) {
        this.combatLog.push(['msgConsole', 'Your ' + this.equippedWeapon.name + ' broke amidst combat...']);
        this.equippedWeapon = null;
        this.currentDamage = 20;
      } 
      
      return true;
    }
  }























  /// RNG ////////////////////////////////////////////////////////////////////////////

  public rollCiv(): Item {
    const roll: number = Math.floor(Math.random() * 101);
    if (roll < 15) return Milk;
    else if (roll < 30) return Bandage;
    else if (roll < 45) return Bowl;
    else if (roll < 58) return GlassBottle;
    else if (roll < 68) return Snowball;
    else if (roll < 78) return WaterBottle;
    else if (roll < 88) return HoneyBottle;
    else if (roll < 94) return BeetrootSoup;
    else if (roll < 98) return SuspiciousStew;
    else return MedKit;
  }

  public rollPots(): Item {
    const roll: number = Math.floor(Math.random() * 101);
    if (roll < 20) return HealPotI;
    if (roll < 30) return HealPotII;
    if (roll < 35) return HealPotIII;
    if (roll < 45) return NetherWart;
    if (roll < 55) return GlowstoneDust;
    if (roll < 65) return RedstoneDust; 
    if (roll < 67) return VegetableJuice;
    if (roll < 69) return Ale;
    if (roll < 71) return Cocktail;
    if (roll < 73) return GoldenApple;
    else return WaterBottle;
  }

  public rollMil(tier: number): Item {
    const roll: number = Math.floor(Math.random() * 101);
    switch(tier) {
      case 1:
        if (roll < 10) return WoodenSword;
        if (roll < 15) return EnchantedWoodenSword;
        if (roll < 25) return WoodenAxe;
        if (roll < 30) return EnchantedWoodenAxe;
        if (roll < 35) return Crossbow;
        if (roll < 45) return LeatherCap;
        if (roll < 55) return LeatherTunic;
        if (roll < 65) return LeatherPants;
        if (roll < 75) return LeatherBoots;
        if (roll < 85) return Bow;
        if (roll < 90) return StoneAxe;
        if (roll < 93) return EnchantedStoneAxe;
        if (roll < 98) return StoneSword
        else return EnchantedStoneSword;
      case 2:
        if (roll < 10) return StoneSword;
        if (roll < 15) return EnchantedStoneSword;
        if (roll < 25) return Bow;
        if (roll < 35) return Crossbow;
        if (roll < 45) return StoneAxe;
        if (roll < 50) return EnchantedStoneAxe;
        if (roll < 60) return ChainHelmet;
        if (roll < 70) return ChainChestplate;
        if (roll < 80) return ChainLeggings;
        if (roll < 90) return ChainBoots;
        if (roll < 95) return Grenade;
        else return Gunpowder;
      default: // tier 3
        if (roll < 10) return IronSword;
        if (roll < 20) return IronAxe;
        if (roll < 30) return IronHelmet;
        if (roll < 40) return IronChestplate;
        if (roll < 50) return IronLeggings;
        if (roll < 60) return IronBoots;
        if (roll < 70) return EnchantedBow;
        if (roll < 80) return EnchantedCrossbow;
        if (roll < 85) return EnchantedIronSword;
        if (roll < 90) return EnchantedIronAxe;
        if (roll < 94) return Grenade;
        if (roll < 97) return Flashbang;
        else return Incendiary;
    }
  }

  public rollTools(tier: number): Item {
    const roll: number = Math.floor(Math.random() * 101);
    switch(tier) {
      case 1:
        if (roll < 10) return FishingRod;
        if (roll < 20) return Shovel;
        if (roll < 30) return Hoe;
        if (roll < 40) return Pickaxe;
        if (roll < 50) return WoodenAxe;
        if (roll < 52) return EnchantedFishingRod;
        if (roll < 54) return EnchantedShovel;
        if (roll < 56) return EnchantedHoe;
        if (roll < 61) return EnchantedWoodenAxe;
        if (roll < 65) return StoneAxe;
        if (roll < 67) return EnchantedStoneAxe;
        if (roll < 72) return Coal;
        if (roll < 77) return Snowball;
        if (roll < 79) return Cobweb;
        if (roll < 81) return Button;
        if (roll < 83) return EnchantedBook;
        if (roll < 88) return Stick;
        if (roll < 93) return StringItem;
        if (roll < 97) return Stone;
        else return Leather;
      case 2:
        if (roll < 10) return EnchantedFishingRod;
        if (roll < 20) return EnchantedShovel;
        if (roll < 30) return EnchantedHoe;
        if (roll < 40) return StoneAxe;
        if (roll < 50) return EnchantedPickaxe;
        if (roll < 55) return EnchantedStoneAxe;
        if (roll < 59) return IronAxe;
        if (roll < 61) return EnchantedIronAxe;
        if (roll < 63) return Grenade;
        if (roll < 65) return SmallBag;
        if (roll < 75) return Snowball;
        if (roll < 80) return Cobweb;
        if (roll < 83) return Button;
        if (roll < 88) return IronIngot;
        if (roll < 93) return EnchantedBook;
        else return Leather;
      default: // tier 3
        if (roll < 10) return EnchantedFishingRod;
        if (roll < 20) return EnchantedShovel;
        if (roll < 30) return EnchantedHoe;
        if (roll < 40) return IronAxe;
        if (roll < 45) return EnchantedIronAxe;
        if (roll < 50) return Grenade;
        if (roll < 55) return SmallBag;
        if (roll < 60) return Button;
        if (roll < 65) return Cobweb;
        if (roll < 70) return Leather;
        if (roll < 75) return Snowball;
        if (roll < 85) return EnchantedBook;
        if (roll < 88) return GoldIngot;
        if (roll < 90) return MysteriousArtifact;
        else return EnchantedPickaxe;
    }
  }

  public rollFood(tier: number): Item {
    const roll: number = Math.floor(Math.random() * 101);
    switch(tier) {
      case 1:
        if (roll < 15) return Apple;
        else if (roll < 20) return Pumpkin;
        else if (roll < 35) return Carrot;
        else if (roll < 50) return MelonSlice;
        else if (roll < 60) return RawFish;
        else if (roll < 75) return Beetroot;
        else if (roll < 80) return Potato;
        else if (roll < 85) return Wheat;
        else if (roll < 87) return CocoaBeans;
        else if (roll < 89) return RawChicken;
        else if (roll < 91) return RawRabbit;
        else if (roll < 95) return RawPorkchop;
        else if (roll < 97) return RawBeef;
        else return Apple;
      case 2: 
        if (roll < 10) return Apple;
        else if (roll < 20) return Carrot;
        else if (roll < 30) return MelonSlice;
        else if (roll < 35) return RedMushroom;
        else if (roll < 40) return BrownMushroom;
        else if (roll < 50) return Wheat;
        else if (roll < 55) return CocoaBeans;
        else if (roll < 60) return Egg;
        else if (roll < 70) return Cookie;
        else if (roll < 73) return BakedPotato;
        else if (roll < 75) return Cake;
        else if (roll < 77) return CookedRabbit;
        else if (roll < 79) return CookedFish;
        else if (roll < 81) return Bread;
        else return Apple;
      default: // tier 3
        if (roll < 10) return BakedPotato;
        if (roll < 20) return PumpkinPie;
        if (roll < 25) return RedMushroom;
        if (roll < 30) return BrownMushroom;
        if (roll < 40) return Wheat;
        if (roll < 45) return CocoaBeans;
        if (roll < 50) return Cookie;
        if (roll < 60) return Bread;
        if (roll < 62) return Cake;
        if (roll < 64) return CookedFish;
        if (roll < 66) return CookedRabbit;
        if (roll < 68) return CookedChicken;
        if (roll < 70) return CookedPorkchop;
        if (roll < 72) return Steak;
        if (roll < 74) return GoldenCarrot;
        else return Apple;
    }
  }

  public rollCrops(): Item {
    const roll: number = Math.floor(Math.random() * 101);
    if (roll < 10) return Carrot;
    else if (roll < 20) return Potato;
    else if (roll < 30) return Beetroot;
    else if (roll < 40) return SweetBerries;
    else if (roll < 50) return MelonSlice;
    else if (roll < 58) return Pumpkin;
    else if (roll < 66) return RedMushroom;
    else if (roll < 74) return BrownMushroom;
    else if (roll < 80) return SugarCane;
    else if (roll < 84) return NetherWart;
    else if (roll < 86) return PoisonousPotato;
    else return Wheat;
  }

  public rollFish(): Item {
    let roll: number = Math.floor(Math.random() * 101);
    // junk roll
    if (roll < 15) {
      let roll: number = Math.floor(Math.random() * 101);
      if (roll < 10) return Leather;
      if (roll < 20) return RottenFlesh;
      if (roll < 30) return Stick;
      if (roll < 40) return StringItem;
      if (roll < 45) return WaterBottle;
      if (roll < 60) return GlassBottle;
      if (roll < 70) return Bowl;
      if (roll < 80) return Stone;
      if (roll < 90) return Bucket;
      return Bone;
    }
    // normal roll
    else {
      let roll: number = Math.floor(Math.random() * 101);
      if (roll < 20) return RawFish;
      if (roll < 23) return Pufferfish;
      if (roll < 25) return Nemo;
      if (roll < 27) return SmallBag;
      if (roll < 31) return Bandage;
      if (roll < 35) return HealPotI;
      if (roll < 40) return WaterBucket;
      if (roll < 44) return Coal;
      if (roll < 48) return Bow;
      if (roll < 52) return Milk;
      if (roll < 59) return WoodenAxe;
      if (roll < 65) return EnchantedWoodenAxe;
      if (roll < 70) return StoneAxe;
      if (roll < 74) return EnchantedStoneAxe;
      if (roll < 79) return RawFish;
      if (roll < 81) return EnchantedBow;
      if (roll < 85) return Crossbow;
      if (roll < 87) return EnchantedBook;
      else return RawFish;
    }

  }
  
  public rollGraves(): Item {
    let roll: number = Math.floor(Math.random() * 101);
    // zombie roll
    if (roll > 95) {
      this.setPlayerHealth = this.$playerHealth.value - 35;
      return RottenFlesh;
    }
    // normal roll
    else {
      let roll: number = Math.floor(Math.random() * 101);
      if (roll < 4) return Hoe;
      else if (roll < 8) return Coal;
      else if (roll < 12) return Milk;
      else if (roll < 16) return Bandage;
      else if (roll < 20) return Potato;
      else if (roll < 24) return Carrot;
      else if (roll < 28) return Beetroot;
      else if (roll < 30) return Button;
      else if (roll < 33) return Cobweb;
      else if (roll < 37) return Gunpowder;
      else if (roll < 44) return WoodenSword;
      else if (roll < 46) return MedKit;
      else if (roll < 52) return EnchantedWoodenSword;
      else if (roll < 57) return StoneSword;
      else if (roll < 61) return EnchantedStoneSword;
      else if (roll < 66) return Bowl;
      else if (roll < 68) return SmallBag;
      else if (roll < 71) return BakedPotato;
      else if (roll < 74) return Leather;
      else if (roll < 77) return LeatherCap;
      else if (roll < 80) return LeatherTunic;
      else if (roll < 83) return LeatherPants;
      else if (roll < 86) return LeatherBoots;
      else if (roll < 88) return ChainHelmet;
      else if (roll < 90) return ChainChestplate;
      else if (roll < 92) return ChainLeggings;
      else if (roll < 94) return ChainBoots;
      else return Bucket;
    }
  }

}
