import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Towns } from '../locations/towns';
import { Location } from '../interfaces/location';
import { Item } from '../interfaces/item';
import { ZombieHead } from '../items/armor';
import { IconPlayer, IconRest, IconWater, IconZombie } from '../items/icons';
import { Bucket, GlassBottle } from '../items/materials';
import { WaterBottle, WaterBucket } from '../items/consumables';

export interface actionMessage {
  subject: string,
  description: string,
  item?: Item,
}

@Component({
  selector: 'app-overworld',
  templateUrl: './overworld.component.html',
  styleUrls: ['./overworld.component.css']
})
export class OverworldComponent implements OnInit {

  public sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  public doneLoading: Promise<boolean>;
  public currentStage: Location;
  public currentMessage: actionMessage | null;
  public craftingOpen: boolean = false;

  constructor(public game: GameService){}

  async ngOnInit() {
    // await this.sleep(1000);
    this.doneLoading = Promise.resolve(true);
    this.currentStage = Towns[this.game.playerStage - 1];
    console.log(this.currentStage);
  }












  /// loot
  public harvest(): boolean {
    if (!this.currentStage.numCrops) {
      alert("There are no more crops to harvest...");
      return false;
    } 
    else {
      for (let i = 0; i < this.game.$playerInventory.value.length; i++) {
        if (this.game.$playerInventory.value[i].name.includes('Hoe')) {
          const rolledItem = this.game.rollCrops();

          this.currentStage.numCrops--;
          if (this.game.$playerInventory.value[i].durability) this.game.useDurability(i);

          this.clearMessage();
          let newActionMessage: actionMessage = {
            subject: 'Harvest',
            description: 'You harvested ' + rolledItem.name + '!',
            item: rolledItem,
          }
          this.currentMessage = newActionMessage;
          this.game.addItem(rolledItem);

          return true;
        }
      }
      alert('You need a hoe to farm!');
      return false;
    }
  }

  public gravedig(): boolean {
    if (!this.currentStage.numGraves) {
      alert("There are no more graves to dig...");
      return false;
    } 
    else {
      for (let i = 0; i < this.game.$playerInventory.value.length; i++) {
        if (this.game.$playerInventory.value[i].name.includes('Shovel')) {
          const rolledItem = this.game.rollGraves();

          this.currentStage.numGraves--;
          if (this.game.$playerInventory.value[i].durability) this.game.useDurability(i);

          if(rolledItem == ZombieHead) {

            this.clearMessage();
            let newActionMessage: actionMessage = {
              subject: 'Gravedigging',
              description: 'You dug up a buried zombie! You were able to kill it, but not without taking some damage. Be more careful!',
              item: rolledItem,
            }
            this.currentMessage = newActionMessage;
            this.game.addItem(rolledItem);

            return false;
          }

          this.clearMessage();
          let newActionMessage: actionMessage = {
            subject: 'Gravedigging',
            description: 'You dug up ' + rolledItem.name + '!',
            item: rolledItem,
          }
          this.currentMessage = newActionMessage;
          this.game.addItem(rolledItem);
          
          return true;
        }
      }
      alert('You need a shovel to dig graves!');
      return false;
    }
  }

  public fish(): boolean {
    if (!this.currentStage.numFish) {
      alert("There is nothing left to fish...");
      return false;
    } 
    else {
      for (let i = 0; i < this.game.$playerInventory.value.length; i++) {
        if (this.game.$playerInventory.value[i].name.includes('Fishing Rod')) {
          const rolledItem = this.game.rollFish();

          this.currentStage.numFish--;
          if (this.game.$playerInventory.value[i].durability) this.game.useDurability(i);

          this.clearMessage();
          let newActionMessage: actionMessage = {
            subject: 'Fishing',
            description: 'You fished ' + rolledItem.name + '!',
            item: rolledItem
          }
          this.currentMessage = newActionMessage;
          this.game.addItem(rolledItem);

          return true;
        }
      }
      alert('You need a fishing rod to fish!');
      return false;
    }
  }

  public loot(): boolean {
    const roll: number = Math.floor(Math.random() * 101);
    let rolledItem: Item;

    if (roll < this.currentStage.lootCivWeight) rolledItem = this.game.rollCiv();
    else if (roll < this.currentStage.lootFoodWeight) rolledItem = this.game.rollFood(this.currentStage.lootFoodTier);
    else if (roll < this.currentStage.lootToolWeight) rolledItem = this.game.rollTools(this.currentStage.lootToolTier);
    else if (roll < this.currentStage.lootPotionWeight) rolledItem = this.game.rollPots();
    else rolledItem = this.game.rollMil(this.currentStage.lootMilitaryTier);
    
    this.currentStage.numChests--;

    this.clearMessage();
    let newActionMessage: actionMessage = {
      subject: 'Looting',
      description: 'You found ' + rolledItem.name + '!',
      item: rolledItem
    }
    this.currentMessage = newActionMessage;
    this.game.addItem(rolledItem);

    return true;
  }




















  /// general actions
  public rest(): void {
    const roll: number = Math.floor(Math.random() * 101);
    if (roll < 75)  {
      this.game.changeValue(this.game.$playerHealth.value + 10, 'Health');
      this.clearMessage();
      let newActionMessage: actionMessage = {
        subject: 'Rest',
        description: 'You had a good rest.', 
        item: IconRest
      }
      this.currentMessage = newActionMessage;
    }
    else if (roll < 80 && this.game.$playerInventory.value.length > 0) {
      const roll: number = Math.floor(Math.random() * this.game.$playerInventory.value.length);
      this.game.removeItem(roll);
      this.clearMessage();
      let newActionMessage: actionMessage = {
        subject: 'Danger',
        description: 'While you were asleep, someone snuck into your bag and stole something!', 
        item: IconPlayer
      }
      this.currentMessage = newActionMessage;
    }
    else {
      this.game.changeValue(this.game.$playerHealth.value - 20, 'Health');
      this.clearMessage();
      let newActionMessage: actionMessage = {
        subject: 'Danger',
        description: 'While you were trying to sleep, a zombie attacked you!', 
        item: IconZombie
      }
      this.currentMessage = newActionMessage;
    }
    this.currentStage.canRest = false;
  }

  public refillWater() {
    this.game.changeValue(100, 'Thirst');
    for (let i = 0; i < this.game.$playerInventory.value.length; i++) {
      if (this.game.$playerInventory.value[i] == GlassBottle) {
        this.game.updateItem(i, WaterBottle);
      }
      if (this.game.$playerInventory.value[i] == Bucket) {
        this.game.updateItem(i, WaterBucket);
      }
    }
    this.clearMessage();
    let newActionMessage: actionMessage = {
      subject: 'Refill',
      description: 'You replenished your thirst and water supply.', 
      item: IconWater
    }
    this.currentMessage = newActionMessage;
    this.currentStage.canRefill = false;
  }

  public toggleCrafting(): void {
    if(this.craftingOpen) this.craftingOpen = false;
    else this.craftingOpen = true;
  }









  public clearMessage(): void {
    this.currentMessage = null;
  }

}
