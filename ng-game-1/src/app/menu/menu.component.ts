import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';
import { Item } from '../interfaces/item';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public inventoryOpen: boolean = false;
  public equipmentOpen: boolean = false;

  constructor(public game: GameService) {};
  
  ngOnInit(): void {
  }

  public toggleInventory(): void {
    if(this.inventoryOpen) this.inventoryOpen = false;
    else this.inventoryOpen = true;
  }

  public toggleEquipment(): void {
    if(this.equipmentOpen) this.equipmentOpen = false;
    else this.equipmentOpen = true;
  }

  public useConsumable(item: Item, index: number): void {
    this.game.useConsumable(item, index);
    alert('You used ' + item.name);
    this.toggleInventory();
  }

  public equipItem(item: Item, index: number): void {
    if(!this.game.equipItem(item, index)) alert('You already have something equipped!');
  }








  /// DEBUG

  public debugChangeName(): void {
    let newName = prompt("Enter a new name:", this.game.playerName);
    this.game.changeName(newName ?? this.game.playerName);
  }

  public debugChangeValue(prop: string): void {
    switch(prop) {
      case 'Health':
        let newHealth = prompt("Enter a new health value:", this.game.$playerHealth.value.toString());
        this.game.changeValue(parseInt(newHealth ?? this.game.$playerHealth.value.toString(), 10), 'Health');
        break;
      case 'Hunger':
        let newHunger = prompt("Enter a new hunger value:", this.game.$playerHunger.value.toString());
        this.game.changeValue(parseInt(newHunger ?? this.game.$playerHunger.value.toString(), 10), 'Hunger');
        break;
      case 'Thirst':
        let newThirst = prompt("Enter a new thirst value:", this.game.$playerThirst.value.toString());
        this.game.changeValue(parseInt(newThirst ?? this.game.$playerThirst.value.toString(), 10), 'Thirst');
        break;
      default: 
        alert('Huh? How did you get here?');
    }
  }

  public debugChangeStatus(): void {
    let newStatus = prompt("Enter a status effect:", this.game.playerStatus.statusName);
    this.game.changeStatus(newStatus ?? this.game.playerStatus.statusName);
  }
  
}
