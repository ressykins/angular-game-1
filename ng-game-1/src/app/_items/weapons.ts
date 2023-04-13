import { Item } from "../_interfaces/item";
import { EnchantedBook, IronIngot, Stick, Stone, StringItem } from "./materials";


/// SWORDS

export const WoodenSword: Item = {
    name: 'Wooden Sword',
    description: '40 Damage\n+5 Weight',
    type: 'Weapon',
    rarity: 'Common',
    weight: 5,
    damage: 40,
    durability: 5,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d5/Wooden_Sword_JE2_BE2.png',
    components: [Stick, Stick, Stick],
    weapon: 'Sword'
}

export const EnchantedWoodenSword: Item = {
    name: 'Enchanted Wooden Sword',
    description: '50 Damage\n+5 Weight\n\nEnhanced critical strike chance',
    type: 'Weapon',
    rarity: 'Uncommon',
    weight: 5,
    damage: 50,
    durability: 10,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c1/Enchanted_Wooden_Sword.gif',
    components: [WoodenSword, EnchantedBook],
    weapon: 'Sword'
}

export const StoneSword: Item = {
    name: 'Stone Sword',
    description: '50 Damage\n+6 Weight',
    type: 'Weapon',
    rarity: 'Uncommon',
    weight: 6,
    damage: 50,
    durability: 15,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b1/Stone_Sword_JE2_BE2.png',
    components: [Stick, Stone, Stone],
    weapon: 'Sword'
}

export const EnchantedStoneSword: Item = {
    name: 'Enchanted Stone Sword',
    description: '60 Damage\n+6 Weight\n\nEnhanced critical strike chance',
    type: 'Weapon',
    rarity: 'Rare',
    weight: 6,
    damage: 60,
    durability: 20,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/ed/Enchanted_Stone_Sword.gif',
    components: [StoneSword, EnchantedBook],
    weapon: 'Sword'
}

export const IronSword: Item = {
    name: 'Iron Sword',
    description: '60 Damage\n+7 Weight',
    type: 'Weapon',
    rarity: 'Rare',
    weight: 7,
    damage: 60,
    durability: 25,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8e/Iron_Sword_JE2_BE2.png',
    components: [Stick, IronIngot, IronIngot],
    weapon: 'Sword'
}

export const EnchantedIronSword: Item = {
    name: 'Enchanted Iron Sword',
    description: '70 Damage\n+7 Weight\n\nEnhanced critical strike chance',
    type: 'Weapon',
    rarity: 'Epic',
    weight: 7,
    damage: 70,
    durability: 30,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/de/Enchanted_Iron_Sword.gif',
    components: [IronSword, EnchantedBook],
    weapon: 'Sword'
}

export const DiamondSword: Item = {
    name: 'Diamond Sword',
    description: '70 Damage\n+8 Weight\n\nSmall chance to insta-kill',
    type: 'Weapon',
    rarity: 'Legendary',
    weight: 8,
    damage: 70,
    durability: 100,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/44/Diamond_Sword_JE3_BE3.png',
    weapon: 'Sword'
}








/// AXES



export const WoodenAxe: Item = {
    name: 'Wooden Axe',
    description: '60 Damage\n+5 Weight',
    type: 'Weapon',
    rarity: 'Common',
    weight: 5,
    damage: 60,
    durability: 5,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/56/Wooden_Axe_JE2_BE2.png',
    components: [Stick, Stick, Stick],
    weapon: 'Axe'
}

export const EnchantedWoodenAxe: Item = {
    name: 'Enchanted Wooden Axe',
    description: '70 Damage\n+5 Weight\n\nDeals more damage to low health enemies',
    type: 'Weapon',
    rarity: 'Uncommon',
    weight: 5,
    damage: 70,
    durability: 10,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e0/Enchanted_Wooden_Axe.gif',
    components: [WoodenAxe, EnchantedBook],
    weapon: 'Axe'
}

export const StoneAxe: Item = {
    name: 'Stone Axe',
    description: '70 Damage\n+6 Weight',
    type: 'Weapon',
    rarity: 'Uncommon',
    weight: 6,
    damage: 70,
    durability: 15,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/02/Stone_Axe_JE2_BE2.png',
    components: [Stick, Stone, Stone],
    weapon: 'Axe'
}

export const EnchantedStoneAxe: Item = {
    name: 'Enchanted Stone Axe',
    description: '80 Damage\n+6 Weight\n\nDeals more damage to low health enemies',
    type: 'Weapon',
    rarity: 'Rare',
    weight: 6,
    damage: 80,
    durability: 20,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d0/Enchanted_Stone_Axe.gif',
    components: [StoneAxe, EnchantedBook],
    weapon: 'Axe'
}

export const IronAxe: Item = {
    name: 'Iron Axe',
    description: '80 Damage\n+7 Weight',
    type: 'Weapon',
    rarity: 'Rare',
    weight: 7,
    damage: 80,
    durability: 25,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5e/Iron_Axe_JE5_BE2.png',
    components: [Stick, IronIngot, IronIngot],
    weapon: 'Axe'
}

export const EnchantedIronAxe: Item = {
    name: 'Enchanted Iron Axe',
    description: '90 Damage\n+7 Weight\n\nDeals more damage to low health enemies',
    type: 'Weapon',
    rarity: 'Epic',
    weight: 7,
    damage: 90,
    durability: 30,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/bf/Enchanted_Iron_Axe.gif',
    components: [IronAxe, EnchantedBook],
    weapon: 'Axe'
}

export const DiamondAxe: Item = {
    name: 'Diamond Axe',
    description: '90 Damage\n+8 Weight\n\n',
    type: 'Weapon',
    rarity: 'Legendary',
    weight: 8,
    damage: 90,
    durability: 100,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/40/Diamond_Axe_JE3_BE3.png',
    weapon: 'Axe'
}




// BOWS

export const Bow: Item = {
    name: 'Bow',
    description: '30-90 Damage\n+8 Weight',
    type: 'Weapon',
    rarity: 'Uncommon',
    weight: 8,
    damage: 30,
    durability: 5,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/99/Bow_JE2_BE1.png',
    components: [Stick, Stick, StringItem],
    weapon: 'Bow'
}

export const EnchantedBow: Item = {
    name: 'Enchanted Bow',
    description: '40-120 Damage\n+8 Weight\n\nDeals extra damage to healthy enemies',
    type: 'Weapon',
    rarity: 'Rare',
    weight: 8,
    damage: 40,
    durability: 10,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/4c/Enchanted_Bow.gif',
    components: [Bow, EnchantedBook],
    weapon: 'Bow'
}

export const Crossbow: Item = {
    name: 'Crossbow',
    description: '60 Damage\n+10 Weight',
    type: 'Weapon',
    rarity: 'Rare',
    weight: 10,
    damage: 60,
    durability: 10,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/79/Crossbow.png',
    components: [Stick, IronIngot, StringItem],
    weapon: 'Crossbow'
}

export const EnchantedCrossbow: Item = {
    name: 'Enchanted Crossbow',
    description: '80 Damage\n+10 Weight\n\nIgnores enemy defenses',
    type: 'Weapon',
    rarity: 'Epic',
    weight: 10,
    damage: 80,
    durability: 15,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/35/Enchanted_Crossbow.gif',
    components: [Crossbow, EnchantedBook],
    weapon: 'Crossbow'
}

export const Shotbow: Item = {
    name: 'The Shotbow',
    description: '200 Damage\n+10 Weight\n\nFires bolts at all enemies',
    type: 'Weapon',
    rarity: 'Legendary',
    weight: 10,
    damage: 200,
    durability: 100,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/35/Enchanted_Crossbow.gif',
    weapon: 'Crossbow'
}
