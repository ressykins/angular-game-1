import { Injectable } from '@angular/core';
import { Item } from './interfaces/item';
import { Bow, Crossbow, EnchantedBow, EnchantedCrossbow, EnchantedIronAxe, EnchantedIronSword, EnchantedStoneAxe, EnchantedStoneSword, EnchantedWoodenAxe, EnchantedWoodenSword, IronAxe, IronSword, StoneAxe, StoneSword, WoodenAxe, WoodenSword } from './items/weapons';
import { Apple, BakedPotato, Bandage, Beetroot, Button, Carrot, Cobweb, HealPotI, HealPotII, HealPotIII, MelonSlice, Milk, PoisonousPotato, Potato, Pufferfish, RawCod, RawSalmon, RottenFlesh, SweetBerries, TropicalFish, WaterBottle } from './items/consumables';
import { Dead, Healthy } from './statusEffects/statusEffects';
import { Bone, Bowl, BrownMushroom, Diamond, EnchantedBook, GlassBottle, GoldIngot, Leather, NetherWart, Pumpkin, RedMushroom, Stick, Stone, StringItem, SugarCane, Wheat } from './items/materials';
import { StatusEffect } from './interfaces/statuseffect';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { FishingRod, MedKit, SmallBag, WoodenHoe, WoodenShovel } from './items/tools';
import { ChainBoots, ChainChestplate, ChainHelmet, ChainLeggings, LeatherBoots, LeatherCap, LeatherPants, LeatherTunic, ZombieHead } from './items/armor';

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
  public playerInventory: Item[] = [FishingRod,WoodenHoe,WoodenShovel];
  public playerStage: number = 1;

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
        else if (value > 999) this.setPlayerHealth = 999;
        else this.setPlayerHealth = value;
        break;
      case 'Hunger':
        if (value < 0 || isNaN(value) ) this.setPlayerHunger = 0;
        else if (value > 999) this.setPlayerHunger = 999;
        else this.setPlayerHunger = value;
        break;
      case 'Thirst':
        if (value < 0 || isNaN(value) ) this.setPlayerThirst = 0;
        else if (value > 999) this.setPlayerThirst = 999;
        else this.setPlayerThirst = value;
        break;
      default: 
        console.log('Huh? How did you get here?');
    }

  }

  public checkPlayer(): void {
    if (this.$playerHealth.value <= 0 || this.$playerHunger.value <= 0 || this.$playerThirst.value <= 0) this.playerStatus = Dead;
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
      if (roll < 15) return RawCod;
      if (roll < 20) return TropicalFish;
      if (roll < 25) return Pufferfish;
      if (roll < 27) return SmallBag;
      if (roll < 31) return Bandage;
      if (roll < 35) return HealPotI;
      if (roll < 38) return HealPotII;
      if (roll < 40) return HealPotIII;
      if (roll < 44) return FishingRod;
      if (roll < 48) return Bow;
      if (roll < 52) return Milk;
      if (roll < 59) return WoodenAxe;
      if (roll < 65) return EnchantedWoodenAxe;
      if (roll < 70) return StoneAxe;
      if (roll < 74) return EnchantedStoneAxe;
      if (roll < 77) return IronAxe;
      if (roll < 79) return EnchantedIronAxe;
      if (roll < 81) return EnchantedBow;
      if (roll < 83) return Crossbow;
      if (roll < 85) return EnchantedCrossbow;
      if (roll < 87) return EnchantedBook;
      else return RawSalmon;
    }

  }
  
  public rollGraves(): Item {
    let roll: number = Math.floor(Math.random() * 101);
    // zombie roll
    if (roll > 0) {
      this.setPlayerHealth -= 35;
      return ZombieHead;
    }
    // normal roll
    else {
      let roll: number = Math.floor(Math.random() * 101);
      if (roll < 4) return WoodenHoe;
      else if (roll < 8) return FishingRod;
      else if (roll < 12) return Milk;
      else if (roll < 16) return Bandage;
      else if (roll < 20) return Potato;
      else if (roll < 24) return Carrot;
      else if (roll < 28) return Beetroot;
      else if (roll < 30) return Button;
      else if (roll < 33) return Cobweb;
      else if (roll < 37) return Bow;
      else if (roll < 44) return WoodenSword;
      else if (roll < 46) return MedKit;
      else if (roll < 52) return EnchantedWoodenSword;
      else if (roll < 57) return StoneSword;
      else if (roll < 61) return EnchantedStoneSword;
      else if (roll < 64) return IronSword;
      else if (roll < 66) return EnchantedIronSword;
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
