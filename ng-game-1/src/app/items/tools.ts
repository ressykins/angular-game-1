import { Item } from "../interfaces/item";

export const FishingRod: Item = {
    name: 'Fishing Rod',
    description: '+3 Weight\n\nCan be used to fish',
    type: 'Tool',
    rarity: 'Common',
    weight: 3,
    durability: 3,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7f/Fishing_Rod_JE2_BE2.png'
}

export const WoodenHoe: Item = {
    name: 'Wooden Hoe',
    description: '+3 Weight\n\nCan be used to harvest crops',
    type: 'Tool',
    rarity: 'Common',
    weight: 3,
    durability: 3,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/cd/Wooden_Hoe_JE3_BE3.png'
}

export const WoodenShovel: Item = {
    name: 'Wooden Shovel',
    description: '+3 Weight\n\nCan be used to dig up graves',
    type: 'Tool',
    rarity: 'Common',
    weight: 3,
    durability: 3,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/26/Wooden_Shovel_JE2_BE2.png'
}