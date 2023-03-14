import { combineLatest } from "rxjs";
import { Item } from "../interfaces/item";
import { EnchantedBook, IronIngot, Leather, Stick, StringItem } from "./materials";
import { Bandage, HealPotI, Milk } from "./consumables";




/// Tools

export const FishingRod: Item = {
    name: 'Fishing Rod',
    description: '+3 Weight\n\nCan be used to fish',
    type: 'Tool',
    rarity: 'Common',
    weight: 3,
    durability: 5,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7f/Fishing_Rod_JE2_BE2.png',
    components: [Stick, StringItem]
}

export const EnchantedFishingRod: Item = {
    name: 'Enchanted Fishing Rod',
    description: '+3 Weight\n\nCan be used to fish',
    type: 'Tool',
    rarity: 'Uncommon',
    weight: 3,
    durability: 10,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e0/Enchanted_Fishing_Rod.gif',
    components: [FishingRod, EnchantedBook]
}


export const Hoe: Item = {
    name: 'Hoe',
    description: '+3 Weight\n\nCan be used to harvest crops',
    type: 'Tool',
    rarity: 'Common',
    weight: 3,
    durability: 5,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/cd/Wooden_Hoe_JE3_BE3.png',
    components: [Stick, Stick]
}

export const EnchantedHoe: Item = {
    name: 'Enchanted Hoe',
    description: '+3 Weight\n\nCan be used to harvest crops',
    type: 'Tool',
    rarity: 'Uncommon',
    weight: 3,
    durability: 10,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2e/Enchanted_Wooden_Hoe.gif',
    components: [Stick, Stick]
}

export const Shovel: Item = {
    name: 'Shovel',
    description: '+3 Weight\n\nCan be used to dig up graves',
    type: 'Tool',
    rarity: 'Common',
    weight: 3,
    durability: 5,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/6c/Stone_Shovel_JE2_BE2.png',
    components: [Stick, IronIngot]
}

export const EnchantedShovel: Item = {
    name: 'Enchanted Shovel',
    description: '+3 Weight\n\nCan be used to dig up graves',
    type: 'Tool',
    rarity: 'Uncommon',
    weight: 3,
    durability: 10,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8a/Enchanted_Stone_Shovel.gif',
    components: [Shovel, EnchantedBook]
}

export const Pickaxe: Item = {
    name: 'Pickaxe',
    description: '+3 Weight\n\nCan be used to mine ore',
    type: 'Tool',
    rarity: 'Common',
    weight: 3,
    durability: 5,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d1/Iron_Pickaxe_JE3_BE2.png',
    components: [Stick, IronIngot]
}

export const EnchantedPickaxe: Item = {
    name: 'EnchantedPickaxe',
    description: '+3 Weight\n\nCan be used to mine ore',
    type: 'Tool',
    rarity: 'Uncommon',
    weight: 3,
    durability: 10,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/fd/Enchanted_Iron_Pickaxe.gif',
    components: [Pickaxe, EnchantedBook]
}





/// Inventory

export const MedKit: Item = {
    name: 'Medical Kit',
    description: '+5 Weight\n\nCan be used to heal yourself or help others',
    type: 'Tool',
    rarity: 'Rare',
    weight: 5,
    durability: 5,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/5a/Shears_JE2_BE2.png'
}

export const SmallBag: Item = {
    name: 'Small Bag',
    description: '-10 Weight',
    type: 'Tool',
    rarity: 'Epic',
    weight: -10,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e7/Brown_Shulker_Box_Revision_1.png',
    components: [Leather, Leather, Leather, Leather, Leather]
}
