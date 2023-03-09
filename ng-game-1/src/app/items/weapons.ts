import { Item } from "../interfaces/item";
import { EnchantedBook, IronIngot, Stick, Stone, StringItem } from "./materials";

export const WoodenSword: Item = {
    name: 'Wooden Sword',
    description: '4 Damage\n+5 Weight',
    type: 'Weapon',
    rarity: 'Common',
    weight: 5,
    damage: 4,
    durability: 20,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d5/Wooden_Sword_JE2_BE2.png',
    components: [Stick, Stick]
}

export const WoodenAxe: Item = {
    name: 'Wooden Axe',
    description: '6 Damage\n+5 Weight',
    type: 'Weapon',
    rarity: 'Common',
    weight: 5,
    damage: 6,
    durability: 15,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/56/Wooden_Axe_JE2_BE2.png',
    components: [Stick, Stick]
}

export const EnchantedWoodenSword: Item = {
    name: 'Enchanted Wooden Sword',
    description: '5 Damage\n+5 Weight',
    type: 'Weapon',
    rarity: 'Uncommon',
    weight: 5,
    damage: 5,
    durability: 25,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c1/Enchanted_Wooden_Sword.gif',
    components: [WoodenSword, EnchantedBook]
}

export const EnchantedWoodenAxe: Item = {
    name: 'Enchanted Wooden Axe',
    description: '7 Damage\n+5 Weight',
    type: 'Weapon',
    rarity: 'Uncommon',
    weight: 5,
    damage: 7,
    durability: 20,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e0/Enchanted_Wooden_Axe.gif',
    components: [WoodenAxe, EnchantedBook]
}

export const StoneSword: Item = {
    name: 'Stone Sword',
    description: '5 Damage\n+6 Weight',
    type: 'Weapon',
    rarity: 'Uncommon',
    weight: 6,
    damage: 5,
    durability: 30,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b1/Stone_Sword_JE2_BE2.png',
    components: [Stick, Stone]
}

export const StoneAxe: Item = {
    name: 'Stone Axe',
    description: '7 Damage\n+6 Weight',
    type: 'Weapon',
    rarity: 'Uncommon',
    weight: 6,
    damage: 7,
    durability: 25,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/02/Stone_Axe_JE2_BE2.png',
    components: [Stick, Stone]
}

export const EnchantedStoneSword: Item = {
    name: 'Enchanted Stone Sword',
    description: '6 Damage\n+6 Weight',
    type: 'Weapon',
    rarity: 'Rare',
    weight: 6,
    damage: 6,
    durability: 35,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/ed/Enchanted_Stone_Sword.gif',
    components: [StoneSword, EnchantedBook]
}

export const EnchantedStoneAxe: Item = {
    name: 'Enchanted Stone Axe',
    description: '8 Damage\n+6 Weight',
    type: 'Weapon',
    rarity: 'Uncommon',
    weight: 6,
    damage: 8,
    durability: 30,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d0/Enchanted_Stone_Axe.gif',
    components: [StoneAxe, EnchantedBook]
}

export const IronSword: Item = {
    name: 'Iron Sword',
    description: '6 Damage\n+7 Weight',
    type: 'Weapon',
    rarity: 'Rare',
    weight: 7,
    damage: 6,
    durability: 40,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8e/Iron_Sword_JE2_BE2.png',
    components: [Stick, IronIngot]
}

export const IronAxe: Item = {
    name: 'Iron Axe',
    description: '8 Damage\n+7 Weight',
    type: 'Weapon',
    rarity: 'Rare',
    weight: 7,
    damage: 8,
    durability: 35,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5e/Iron_Axe_JE5_BE2.png',
    components: [Stick, IronIngot]
}

export const EnchantedIronSword: Item = {
    name: 'Enchanted Iron Sword',
    description: '7 Damage\n+7 Weight',
    type: 'Weapon',
    rarity: 'Epic',
    weight: 7,
    damage: 7,
    durability: 45,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/de/Enchanted_Iron_Sword.gif',
    components: [IronSword, EnchantedBook]
}

export const EnchantedIronAxe: Item = {
    name: 'Enchanted Iron Axe',
    description: '9 Damage\n+7 Weight',
    type: 'Weapon',
    rarity: 'Epic',
    weight: 7,
    damage: 9,
    durability: 40,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/bf/Enchanted_Iron_Axe.gif',
    components: [IronAxe, EnchantedBook]
}

export const Bow: Item = {
    name: 'Bow',
    description: '3-7 Damage\n+8 Weight',
    type: 'Weapon',
    rarity: 'Uncommon',
    weight: 8,
    damage: [3,4,5,6,7],
    durability: 15,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/99/Bow_JE2_BE1.png',
    components: [Stick, Stick, StringItem]
}

export const EnchantedBow: Item = {
    name: 'Enchanted Bow',
    description: '5-9 Damage\n+8 Weight',
    type: 'Weapon',
    rarity: 'Rare',
    weight: 8,
    damage: [5,6,7,8,9],
    durability: 25,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/4c/Enchanted_Bow.gif',
    components: [Bow, EnchantedBook]
}

export const Crossbow: Item = {
    name: 'Crossbow',
    description: '3-9 Damage\n+10 Weight',
    type: 'Weapon',
    rarity: 'Rare',
    weight: 10,
    damage: [3,3,5,5,5,7,9],
    durability: 20,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/79/Crossbow.png',
    components: [Stick, IronIngot, StringItem]
}

export const EnchantedCrossbow: Item = {
    name: 'Enchanted Crossbow',
    description: '4-10 Damage\n+10 Weight',
    type: 'Weapon',
    rarity: 'Epic',
    weight: 10,
    damage: [4,6,6,6,8,8,10],
    durability: 25,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/35/Enchanted_Crossbow.gif',
    components: [Crossbow, EnchantedBook]
}
