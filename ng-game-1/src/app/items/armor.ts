import { Item } from "../interfaces/item";
import { RottenFlesh } from "./consumables";
import { IronIngot, Leather, Stone } from "./materials";

export const LeatherCap: Item = {
    name: 'Leather Cap',
    description: '+1 Defense\n+1 Weight',
    type: 'Head Armor',
    rarity: 'Common',
    weight: 1,
    defense: 1,
    durability: 5,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/de/Leather_Cap_JE4_BE2.png',
    components: [Leather, Leather]
}

export const LeatherTunic: Item = {
    name: 'Leather Tunic',
    description: '+3 Defense\n+3 Weight',
    type: 'Body Armor',
    rarity: 'Common',
    weight: 3,
    defense: 3,
    durability: 8,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b7/Leather_Tunic_JE4_BE2.png',
    components: [Leather, Leather, Leather]
}

export const LeatherPants: Item = {
    name: 'Leather Pants',
    description: '+2 Defense\n+2 Weight',
    type: 'Leg Armor',
    rarity: 'Common',
    weight: 2,
    defense: 2,
    durability: 7,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/06/Leather_Pants_JE4_BE2.png',
    components: [Leather, Leather, Leather]
}

export const LeatherBoots: Item = {
    name: 'Leather Boots',
    description: '+1 Defense\n+1 Weight',
    type: 'Boot Armor',
    rarity: 'Common',
    weight: 1,
    defense: 1,
    durability: 4,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/25/Leather_Boots_JE3_BE2.png',
    components: [Leather, Leather]
}

export const ChainHelmet: Item = {
    name: 'Chainmail Helmet',
    description: '+3 Defense\n+3 Weight',
    type: 'Head Armor',
    rarity: 'Rare',
    weight: 3,
    defense: 3,
    durability: 10,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/1e/Chainmail_Helmet_JE3_BE2.png',
    components: [Stone, Stone]
}

export const ChainChestplate: Item = {
    name: 'Chainmail Chestplate',
    description: '+5 Defense\n+5 Weight',
    type: 'Body Armor',
    rarity: 'Rare',
    weight: 5,
    defense: 5,
    durability: 14,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8e/Chainmail_Chestplate_JE3_BE2.png',
    components: [Stone, Stone, Stone]
}

export const ChainLeggings: Item = {
    name: 'Chainmail Leggings',
    description: '+4 Defense\n+4 Weight',
    type: 'Leg Armor',
    rarity: 'Rare',
    weight: 4,
    defense: 4,
    durability: 12,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/00/Chainmail_Leggings_JE2_BE2.png',
    components: [Stone, Stone, Stone]
}

export const ChainBoots: Item = {
    name: 'Chainmail Boots',
    description: '+2 Defense\n+2 Weight',
    type: 'Boot Armor',
    rarity: 'Rare',
    weight: 2,
    defense: 2,
    durability: 7,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/47/Chainmail_Boots_JE2_BE2.png',
    components: [Stone, Stone]
}

export const IronHelmet: Item = {
    name: 'Iron Helmet',
    description: '+5 Defense\n+5 Weight',
    type: 'Head Armor',
    rarity: 'Epic',
    weight: 5,
    defense: 5,
    durability: 20,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/37/Iron_Helmet_JE2_BE2.png',
    components: [IronIngot, IronIngot]
}

export const IronChestplate: Item = {
    name: 'Chainmail Chestplate',
    description: '+8 Defense\n+8 Weight',
    type: 'Body Armor',
    rarity: 'Epic',
    weight: 8,
    defense: 8,
    durability: 30,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/31/Iron_Chestplate_JE2_BE2.png',
    components: [IronIngot, IronIngot, IronIngot]
}

export const IronLeggings: Item = {
    name: 'Iron Leggings',
    description: '+6 Defense\n+6 Weight',
    type: 'Leg Armor',
    rarity: 'Epic',
    weight: 6,
    defense: 6,
    durability: 25,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/42/Iron_Leggings_JE2_BE2.png',
    components: [IronIngot, IronIngot, IronIngot]
}

export const IronBoots: Item = {
    name: 'Iron Boots',
    description: '+4 Defense\n+4 Weight',
    type: 'Boot Armor',
    rarity: 'Epic',
    weight: 4,
    defense: 4,
    durability: 15,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/42/Iron_Boots_JE2_BE2.png',
    components: [IronIngot, IronIngot]
}

export const ZombieHead: Item = {
    name: 'Zombie Head',
    description: '+2 Weight\n\nZombies are less likely to attack you',
    type: 'Head Armor',
    rarity: 'Uncommon',
    weight: 2,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e4/Zombie_Head_(8).png',
    components: [Leather, RottenFlesh, RottenFlesh, RottenFlesh]
}