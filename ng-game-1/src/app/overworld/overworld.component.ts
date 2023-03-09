import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Towns } from '../locations/towns';
import { Location } from '../interfaces/location';
import { WoodenHoe, WoodenShovel } from '../items/tools';
import { Item } from '../interfaces/item';
import { ZombieHead } from '../items/armor';

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

  public clearMessage(): void {
    this.currentMessage = null;
  }

}
