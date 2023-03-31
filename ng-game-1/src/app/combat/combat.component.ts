import { Component } from '@angular/core';
import { GameService } from '../game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent {

  public sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
  public awaitingSelection: boolean = false;
  public awaitTurn: boolean = false;
  public selectionMsg: string = "";
  public selectionIntent: string = "";

  constructor(public game: GameService, public router: Router){}

  public playerAction(intent: string): boolean {
    if (intent == this.selectionIntent) {
      this.awaitingSelection = false;
      this.selectionIntent = "";
      this.selectionMsg = "";
      return false;
    }

    this.selectionIntent = intent;
    
    if (this.selectionIntent == 'fight' && this.game.equippedWeapon && (this.game.equippedWeapon.type == 'Bow' || this.game.equippedWeapon.type == 'Axe')) return this.game.useAttack(0);

    this.awaitingSelection = true;
    this.selectionMsg = "Choose a target."
    return true;
  }



  public selectEnemy(index: number): boolean {
    if (this.selectionIntent) {
      this.game.startTurn(index, this.selectionIntent);
      this.awaitTurn = true;
      this.awaitingSelection = false;
      this.selectionIntent = '';
      this.selectionMsg = '';
      return true;
    } 
    else return false;
  }
}
