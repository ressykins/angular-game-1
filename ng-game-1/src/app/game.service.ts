import { Injectable } from '@angular/core';
import { Item } from './interfaces/item';
import { EnchantedWoodenSword, WoodenSword } from './items/weapons';
import { Beetroot, Button, Carrot, Potato, WaterBottle } from './items/consumables';
import { Dead, Healthy } from './statusEffects/statusEffects';
import { Diamond, GoldIngot, Wheat } from './items/materials';
import { StatusEffect } from './interfaces/statuseffect';
import { Observable, Subject } from 'rxjs';
import { FishingRod, WoodenHoe, WoodenShovel } from './items/tools';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  public playerName: string = 'Survivor';
  public playerHealth: number = 100;
  public playerHunger: number = 100;
  public playerThirst: number =100;
  public playerStatus: StatusEffect = Healthy;
  public playerInventory: Item[] = [FishingRod,WoodenHoe,WoodenShovel];
  public subject = new Subject;
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
        if (value < 0 || isNaN(value) ) this.playerHealth = 0;
        else if (value > 999) this.playerHealth = 999;
        else this.playerHealth = value;
        break;
      case 'Hunger':
        if (value < 0 || isNaN(value) ) this.playerHunger = 0;
        else if (value > 999) this.playerHunger = 999;
        else this.playerHunger = value;
        break;
      case 'Thirst':
        if (value < 0 || isNaN(value) ) this.playerThirst = 0;
        else if (value > 999) this.playerThirst = 999;
        else this.playerThirst = value;
        break;
      default: 
        console.log('Huh? How did you get here?');
    }

    this.checkPlayer();
  }

  public checkPlayer(): void {
    if (this.playerHealth == 0 || this.playerHunger == 0 || this.playerThirst == 0) this.playerStatus = Dead;
  }

  public onSubscribe(): Observable<any> {
    return this.subject.asObservable();
  }

  public rollCrops(): Item {
    const roll: number = Math.floor(Math.random() * 101);
    if (roll < 10) return Carrot;
    else if (roll < 20) return Potato;
    else if (roll < 30) return Beetroot;

    else return Wheat;
  }
}
