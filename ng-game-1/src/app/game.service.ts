import { Injectable } from '@angular/core';
import { Item } from './interfaces/item';
import { Bow, Crossbow, EnchantedBow, EnchantedCrossbow, EnchantedIronAxe, EnchantedIronSword, EnchantedStoneAxe, EnchantedStoneSword, EnchantedWoodenAxe, EnchantedWoodenSword, IronAxe, IronSword, StoneAxe, StoneSword, WoodenAxe, WoodenSword } from './items/weapons';
import { Ale, Apple, BakedPotato, Bandage, Beetroot, BeetrootSoup, Bread, Button, Cake, Carrot, Cobweb, Cocktail, CookedChicken, CookedFish, CookedPorkchop, CookedRabbit, Cookie, Egg, Flashbang, GoldenApple, GoldenCarrot, Grenade, HealPotI, HealPotII, HealPotIII, HoneyBottle, Incendiary, MelonSlice, Milk, MysteriousArtifact, Nemo, PoisonousPotato, Potato, Pufferfish, PumpkinPie, RawBeef, RawChicken, RawFish, RawPorkchop, RawRabbit, RottenFlesh, Snowball, Steak, SuspiciousStew, SweetBerries, VegetableJuice, WaterBottle } from './items/consumables';
import { Dead, Healthy } from './statusEffects/statusEffects';
import { Bone, Bowl, BrownMushroom, Coal, CocoaBeans, EnchantedBook, GlassBottle, GlowstoneDust, GoldIngot, Gunpowder, IronIngot, Leather, NetherWart, Pumpkin, RedMushroom, RedstoneDust, Stick, Stone, StringItem, SugarCane, Wheat } from './items/materials';
import { StatusEffect } from './interfaces/statuseffect';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { EnchantedFishingRod, EnchantedHoe, EnchantedPickaxe, EnchantedShovel, FishingRod, Hoe, MedKit, Pickaxe, Shovel, SmallBag } from './items/tools';
import { ChainBoots, ChainChestplate, ChainHelmet, ChainLeggings, IronBoots, IronChestplate, IronHelmet, IronLeggings, LeatherBoots, LeatherCap, LeatherPants, LeatherTunic, ZombieHead } from './items/armor';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public playerName: string = 'Survivor';

  public $playerHealth = new BehaviorSubject<number>(100);
  public set setPlayerHealth(value: number) {
    this.$playerHealth.next(value);
    this.checkPlayer();
  }
  public get playerHealth(): Observable<number> {
    return this.$playerHealth.asObservable();
  }

  public $playerHunger = new BehaviorSubject<number>(100);
  public set setPlayerHunger(value: number) {
    this.$playerHunger.next(value);
    this.checkPlayer();
  }
  public get playerHunger(): Observable<number> {
    return this.$playerHunger.asObservable();
  }

  public $playerThirst = new BehaviorSubject<number>(100);
  public set setPlayerThirst(value: number) {
    this.$playerThirst.next(value);
    this.checkPlayer();
  }
  public get playerThirst(): Observable<number> {
    return this.$playerThirst.asObservable();
  }

  public playerStatus: StatusEffect = Healthy;
  public playerInventory: Item[] = [FishingRod,Hoe,Shovel];
  public playerStage: number = 1;
  public inCombat: boolean = false;
  public equippedWeapon: Item;
  public equippedHead: Item;
  public equippedChest: Item;
  public equippedLegs: Item;
  public equippedBoots: Item;

  constructor() { }


  public createPlayer(items: Item[], name: string): void {
    this.playerName = name;
    this.playerInventory.push(WoodenSword, WaterBottle);
    this.playerInventory.concat(items);
  }

  public changeName(name: string): void {
    if (name.length < 1) this.playerName = 'Survivor';
    else this.playerName = name;
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

  public checkPlayer(): void {
    if (this.$playerHealth.value <= 0 || this.$playerHunger.value <= 0 || this.$playerThirst.value <= 0) this.playerStatus = Dead;
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
      if (roll < 40) return RawFish;
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
      else return Apple;
    }
  }

}
