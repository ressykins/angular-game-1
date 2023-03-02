import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Towns } from '../locations/towns';
import { Location } from '../interfaces/location';
import { WoodenHoe } from '../items/tools';

@Component({
  selector: 'app-overworld',
  templateUrl: './overworld.component.html',
  styleUrls: ['./overworld.component.css']
})
export class OverworldComponent implements OnInit {

  public sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  public doneLoading: Promise<boolean>;
  public currentStage: Location;

  constructor(public game: GameService){}

  async ngOnInit() {
    // await this.sleep(1000);
    this.doneLoading = Promise.resolve(true);
    this.currentStage = Towns[this.game.playerStage - 1];
    console.log(this.currentStage);
  }

  public harvest(): boolean {
    for (let item of this.game.playerInventory) {
      if (item == WoodenHoe) {
        this.game.rollCrops();
        return true;
      }
    }
    alert('You need a hoe to farm!');
    return false;
  }

}
