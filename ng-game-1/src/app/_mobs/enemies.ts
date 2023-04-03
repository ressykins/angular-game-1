import { Enemy } from "../_interfaces/enemy";
import { LeatherBoots, LeatherCap, LeatherPants, LeatherTunic, ZombieHead } from "../_items/armor";
import { Apple, Carrot, GoldenApple, GoldenCarrot, HealPotI, PoisonousPotato, Potato, Pufferfish, PumpkinPie, RawFish, RottenFlesh, WaterBottle } from "../_items/consumables";
import { Pumpkin } from "../_items/materials";
import { FishingRod, Hoe, Shovel } from "../_items/tools";
import { DiamondAxe, DiamondSword, IronSword, Shotbow } from "../_items/weapons";

export const Zombie: Enemy = {
    enemyName: 'Zombie',
    enemyHealth: 20,
    enemyMaxHealth: 20,
    enemyDamage: 15,
    enemyDefense: 2,
    enemySpeed: 10,
    enemyDrops: [[RottenFlesh, 50],[ZombieHead, 2]],
    enemyPicture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/87/Zombie_JE3_BE2.png',
    enemyDesc: '',
    enemyType: 'Zombie',
    specialActions: [['CallForHelp', 10]],
}

export const SwordZombie: Enemy = {
    enemyName: 'Zombie Swordsman',
    enemyHealth: 20,
    enemyMaxHealth: 20,
    enemyDamage: 30,
    enemyDefense: 2,
    enemySpeed: 10,
    enemyDrops: [[RottenFlesh, 50], [IronSword, 5], [ZombieHead, 2]],
    enemyPicture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/46/Zombie_iron_sword.png',
    enemyDesc: '',
    enemyType: 'Zombie',
    specialActions: [['CallForHelp', 10]]
}

export const ShovelZombie: Enemy = {
    enemyName: 'Zombie Gravedigger',
    enemyHealth: 20,
    enemyMaxHealth: 20,
    enemyDamage: 20,
    enemyDefense: 2,
    enemySpeed: 10,
    enemyDrops: [[RottenFlesh, 50], [Shovel, 5], [ZombieHead, 2]],
    enemyPicture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b8/Zombie_with_iron_shovel.png',
    enemyDesc: '',
    enemyType: 'Zombie',
    specialActions: [['CallForHelp', 10]]
}

export const PumpkinZombie: Enemy = {
    enemyName: "Jack O' Zombie",
    enemyHealth: 20,
    enemyMaxHealth: 20,
    enemyDamage: 15,
    enemyDefense: 4,
    enemySpeed: 10,
    enemyDrops: [[RottenFlesh, 50],[Pumpkin, 10],[PumpkinPie, 2], [ZombieHead, 2]],
    enemyPicture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/3b/Old_pumpkin_zombie.png',
    enemyDesc: '',
    enemyType: 'Zombie',
    specialActions: [['CallForHelp', 10]]
}

export const LeatherZombie: Enemy = {
    enemyName: "Zombie Scavenger",
    enemyHealth: 20,
    enemyMaxHealth: 20,
    enemyDamage: 15,
    enemyDefense: 7,
    enemySpeed: 10,
    enemyDrops: [[RottenFlesh, 50],[LeatherCap, 5],[LeatherTunic, 5], [LeatherPants, 5], [LeatherBoots, 5], [ZombieHead, 2], [HealPotI, 20]],
    enemyPicture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/3e/Zombie_in_leather_armor.png',
    enemyDesc: '',
    enemyType: 'Zombie',
    specialActions: [['CallForHelp', 10]]
}

export const FarmerZombie: Enemy = {
    enemyName: "Zombie Farmer",
    enemyHealth: 20,
    enemyMaxHealth: 20,
    enemyDamage: 15,
    enemyDefense: 2,
    enemySpeed: 10,
    enemyDrops: [[RottenFlesh, 50], [ZombieHead, 2], [Carrot, 5], [Potato, 5], [Apple, 5], [Hoe, 5], [PoisonousPotato, 5]],
    enemyPicture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/fd/Plains_Zombie_Villager_Base.png',
    enemyDesc: '',
    enemyType: 'Zombie',
    specialActions: [['CallForHelp', 10]]
}

export const FisherZombie: Enemy = {
    enemyName: "Zombie Fisherman",
    enemyHealth: 20,
    enemyMaxHealth: 20,
    enemyDamage: 15,
    enemyDefense: 2,
    enemySpeed: 10,
    enemyDrops: [[RottenFlesh, 50], [ZombieHead, 2], [RawFish, 5], [WaterBottle, 5], [FishingRod, 5], [Pufferfish, 5]],
    enemyPicture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/86/Snowy_Zombie_Villager_Base.png',
    enemyDesc: '',
    enemyType: 'Zombie',
    specialActions: [['CallForHelp', 10]]
}





export const GiantZombie: Enemy = {
    enemyName: "The Giant",
    enemyHealth: 100,
    enemyMaxHealth: 100,
    enemyDamage: 60,
    enemyDefense: 20,
    enemySpeed: 0,
    enemyDrops: [[RottenFlesh, 100],[RottenFlesh, 100],[RottenFlesh, 100],[DiamondSword, 30],[DiamondAxe, 30],[Shotbow,30],[GoldenCarrot, 50],[GoldenApple, 50],[ZombieHead, 10]],
    enemyPicture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/87/Zombie_JE3_BE2.png',
    enemyDesc: '',
    enemyType: 'Zombie',
    specialActions: [['CallForHelp', 10], ['SeismicShockwave', 20], ['Kick', 30]]
}





export const BabyZombie: Enemy = {
    enemyName: 'Zombie',
    enemyHealth: 10,
    enemyMaxHealth: 10,
    enemyDamage: 10,
    enemyDefense: 0,
    enemySpeed: 30,
    enemyDrops: [[RottenFlesh, 25], [ZombieHead, 2]],
    enemyPicture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/0d/Baby_Zombie_JE2_BE2.png',
    enemyDesc: '',
    enemyType: 'Zombie',
    specialActions: []
}

export const PumpkinBabyZombie: Enemy = {
    enemyName: "Baby Jack O' Zombie",
    enemyHealth: 10,
    enemyMaxHealth: 10,
    enemyDamage: 10,
    enemyDefense: 2,
    enemySpeed: 30,
    enemyDrops: [[RottenFlesh, 25],[Pumpkin, 10],[PumpkinPie, 2], [ZombieHead, 2]],
    enemyPicture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e9/Baby_Zombie_with_Carved_Pumpkin.png',
    enemyDesc: '',
    enemyType: 'Zombie',
    specialActions: []
}

