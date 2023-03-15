import { Component, OnInit } from '@angular/core';
import { Kit } from '../interfaces/kit';
import { Apple, Bandage, Button, Carrot, Cobweb, HealPotI, Milk, Potato } from '../items/consumables';
import { Bow, EnchantedWoodenSword } from '../items/weapons';
import { FishingRod, Hoe, Shovel, SmallBag } from '../items/tools';
import { LeatherTunic } from '../items/armor';
import { Leather, Stick, StringItem, Wheat } from '../items/materials';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { GameService } from '../game.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-title-screen',
  templateUrl: './title-screen.component.html',
  styleUrls: ['./title-screen.component.css']
})
export class TitleScreenComponent {

  constructor(public game: GameService, public router: Router){}

  public adventureStarted: boolean = false;
  public rerollsRemaining: number = 3;
  public selectedKit: Kit;
  public survivorName: string;


  public kits: Kit[] = [
    {
     name: 'Chef',
     description: 'Start with some food',
     inventory: [Apple, Carrot, Potato]
    },
    {
      name: 'Warrior',
      description: 'Start with a better weapon',
      inventory: [EnchantedWoodenSword]
    },
    {
      name: 'Medic',
      description: 'Start with some medical supplies',
      inventory: [Bandage, Milk]
    },
    {
      name: 'Keymaster',
      description: 'Start with a button',
      inventory: [Button]
    },
    {
      name: 'Archer',
      description: 'Start with a bow',
      inventory: [Bow]
    },
    {
      name: 'Fisherman',
      description: 'Start with a fishing rod',
      inventory: [FishingRod]
    },
    {
      name: 'Alchemist',
      description: 'Start with a potion',
      inventory: [HealPotI]
    },
    {
      name: 'Clothier',
      description: 'Start with some armor',
      inventory: [LeatherTunic]
    },
    {
      name: 'Farmer',
      description: 'Start with some farming stuff',
      inventory: [Wheat, Hoe]
    },
    {
      name: 'Gravedigger',
      description: 'Am I really going to defile this grave for money?',
      inventory: [Shovel, Cobweb]
    },
    {
      name: 'Hiker',
      description: 'Start off with some more inventory capacity',
      inventory: [SmallBag]
    },
    {
      name: 'Crafter',
      description: 'Start off with some crafting materials',
      inventory: [Stick, Leather, StringItem]
    },
  ]

  ngOnInit(): void {

  }

  public startGame(): void {
    this.adventureStarted = true;
    this.rerollKits();
  }

  public rerollKits(): void {
    if (this.rerollsRemaining < 3) {
      this.kits = this.kits.slice(3);
    }
    this.kits.sort(() => 0.5 - Math.random());
    this.rerollsRemaining--;
    console.log(this.kits);
  }

  public selectKit(kit: Kit): void {
    this.selectedKit = kit;
    this.game.createPlayer(this.selectedKit.inventory, this.survivorName);
    this.router.navigate(['/hub']);
  }

}
