import { Component } from '@angular/core';
import { GameService } from '../game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent {

  public awaitingSelection: boolean = false;
  public selectionMsg: string = "";
  public selectionIntent: string = "";
  public isDead: boolean = false;

  constructor(public game: GameService, public router: Router){}

  public playerAction(intent: string): boolean {
    if (intent == this.selectionIntent) {
      this.awaitingSelection = false;
      this.selectionIntent = "";
      this.selectionMsg = "";
      return false;
    }

    this.selectionIntent = intent;
    if (this.selectionIntent == 'fight' && this.game.equippedWeapon && (this.game.equippedWeapon.weapon == 'Bow' || this.game.equippedWeapon.weapon == 'Axe')) {
      this.selectEnemy(0);
      return true;
    }
    else {
      this.awaitingSelection = true;
      this.selectionMsg = "Choose a target."
      return true;
    }
  }

  public async selectEnemy(index: number): Promise<boolean> {
    if (this.selectionIntent) {
      this.game.startTurn(index, this.selectionIntent);
      if (this.game.playerStatus.statusName == 'Dead') {

      }
      this.awaitingSelection = false;
      this.selectionIntent = '';
      this.selectionMsg = '';
      if (this.game.combatVictory) {
        
      }
      return true;
    } 
    else return false;
  }
  
}
