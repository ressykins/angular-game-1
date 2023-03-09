import { combineLatest } from "rxjs";
import { Item } from "../interfaces/item";
import { Leather, Stick, StringItem } from "./materials";

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

export const WoodenHoe: Item = {
    name: 'Wooden Hoe',
    description: '+3 Weight\n\nCan be used to harvest crops',
    type: 'Tool',
    rarity: 'Common',
    weight: 3,
    durability: 5,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/cd/Wooden_Hoe_JE3_BE3.png',
    components: [Stick, Stick]
}

export const WoodenShovel: Item = {
    name: 'Wooden Shovel',
    description: '+3 Weight\n\nCan be used to dig up graves',
    type: 'Tool',
    rarity: 'Common',
    weight: 3,
    durability: 5,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/26/Wooden_Shovel_JE2_BE2.png',
    components: [Stick, Stick]
}

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
