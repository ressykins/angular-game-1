import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Towns } from '../locations/towns';
import { Location } from '../interfaces/location';
import { Item } from '../interfaces/item';
import { ZombieHead } from '../items/armor';
import { IconPlayer, IconRest, IconZombie } from '../items/icons';

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

  constructor(public game: GameService){}

  async ngOnInit() {
    // await this.sleep(1000);
    this.doneLoading = Promise.resolve(true);
    this.currentStage = Towns[this.game.playerStage - 1];
    console.log(this.currentStage);
  }

  public harvest(): boolean {
    if (!this.currentStage.numCrops) {
      alert("There are no more crops to harvest...");
      return false;
    } 
    else {
      for (let item of this.game.playerInventory) {
        if (item.name.includes('Hoe')) {
          const rolledItem = this.game.rollCrops();
          console.log(rolledItem);

          this.currentStage.numCrops--;
          if (item.durability) item.durability--;

          this.clearMessage();
          let newActionMessage: actionMessage = {
            subject: 'Harvest',
            description: 'You harvested ' + rolledItem.name + '!',
            item: rolledItem,
          }
          this.currentMessage = newActionMessage;

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
      for (let item of this.game.playerInventory) {
        if (item.name.includes('Shovel')) {
          const rolledItem = this.game.rollGraves();
          console.log(rolledItem);

          this.currentStage.numGraves--;
          if (item.durability) item.durability--;

          if(rolledItem == ZombieHead) {

            this.clearMessage();
            let newActionMessage: actionMessage = {
              subject: 'Gravedigging',
              description: 'You dug up a buried zombie! You were able to kill it, but not without taking some damage. Be more careful!',
              item: rolledItem,
            }
            this.currentMessage = newActionMessage;

            return false;
          }

          this.clearMessage();
          let newActionMessage: actionMessage = {
            subject: 'Gravedigging',
            description: 'You dug up ' + rolledItem.name + '!',
            item: rolledItem,
          }
          this.currentMessage = newActionMessage;
          
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
      for (let item of this.game.playerInventory) {
        if (item.name == 'Fishing Rod') {
          const rolledItem = this.game.rollFish();
          console.log(rolledItem);

          this.currentStage.numFish--;
          if (item.durability) item.durability--;

          this.clearMessage();
          let newActionMessage: actionMessage = {
            subject: 'Fishing',
            description: 'You fished ' + rolledItem.name + '!',
            item: rolledItem
          }
          this.currentMessage = newActionMessage;

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
    
    console.log(rolledItem);
    this.currentStage.numChests--;

    this.clearMessage();
    let newActionMessage: actionMessage = {
      subject: 'Looting',
      description: 'You found ' + rolledItem.name + '!',
      item: rolledItem
    }
    this.currentMessage = newActionMessage;

    return true;
  }


  public rest() {
    const roll: number = Math.floor(Math.random() * 101);
    console.log(this.game.$playerHealth.value + 10);
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
    else if (roll < 95) {
      this.game.changeValue(this.game.$playerHealth.value - 20, 'Health');
      this.clearMessage();
      let newActionMessage: actionMessage = {
        subject: 'Danger',
        description: 'While you were trying to sleep, a zombie attacked you!', 
        item: IconZombie
      }
      this.currentMessage = newActionMessage;
    }
    else {
      this.clearMessage();
      let newActionMessage: actionMessage = {
        subject: 'Danger',
        description: 'While you were asleep, someone snuck into your bag and stole something!', 
        item: IconPlayer
      }
      this.currentMessage = newActionMessage;
    }
    this.currentStage.canRest = false;
  }



  public clearMessage(): void {
    this.currentMessage = null;
  }

}
