import { compileClassMetadata } from "@angular/compiler";
import { Item } from "../interfaces/item";



/// FARMING

export const Wheat: Item = {
    name: 'Wheat',
    description: '+1 Weight',
    type: 'Material',
    rarity: 'Common',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/75/Wheat_JE2_BE2.png'
}

export const Pumpkin: Item = {
    name: 'Pumpkin',
    description: '+2 Weight',
    type: 'Material',
    rarity: 'Uncommon',
    weight: 2,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8e/Carved_Pumpkin_(S)_JE4.png'
}

export const RedMushroom: Item = {
    name: 'Red Mushroom',
    description: '+1 Weight',
    type: 'Material',
    rarity: 'Common',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/f2/Red_Mushroom_JE9.png'
}

export const BrownMushroom: Item = {
    name: 'Brown Mushroom',
    description: '+1 Weight',
    type: 'Material',
    rarity: 'Common',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/4f/Brown_Mushroom_JE9.png'
}

export const SugarCane: Item = {
    name: 'Sugar Cane',
    description: '+1 Weight',
    type: 'Material',
    rarity: 'Common',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/3a/Sugar_Cane_(item)_JE3_BE3.png'
}

export const NetherWart: Item = {
    name: 'Nether Wart',
    description: '+1 Weight',
    type: 'Material',
    rarity: 'Rare',
    weight: 1,
    picture: 'https://wiki.hypixel.net/images/7/76/SkyBlock_items_enchanted_nether_wart.gif'
}

export const CocoaBeans: Item = {
    name: 'Cocoa Beans',
    description: '+1 Weight',
    type: 'Material',
    rarity: 'Uncommon',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft/images/a/af/CocoaBeans.png'
}

export const Sugar: Item = {
    name: 'Sugar',
    description: '+1 Weight',
    type: 'Material',
    rarity: 'Common',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b7/Sugar_JE2_BE2.png',
    components: [SugarCane]
}






/// CRAFTING

export const GoldIngot: Item = {
    name: 'Gold Ingot',
    description: '+4 Weight',
    type: 'Material',
    rarity: 'Epic',
    weight: 4,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/8a/Gold_Ingot_JE4_BE2.png'
}

export const Stick: Item = {
    name: 'Stick',
    description: '+1 Weight',
    type: 'Material',
    rarity: 'Common',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/7a/Stick_JE1_BE1.png'
}

export const IronIngot: Item = {
    name: 'Iron Ingot',
    description: '+3 Weight',
    type: 'Material',
    rarity: 'Uncommon',
    weight: 3,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/fc/Iron_Ingot_JE3_BE2.png'
}

export const Stone: Item = {
    name: 'Stone',
    description: '+2 Weight',
    type: 'Material',
    rarity: 'Common',
    weight: 2,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d4/Stone.png'
}

export const StringItem: Item = {
    name: 'String',
    description: '+1 Weight',
    type: 'Material',
    rarity: 'Common',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/13/String_JE2_BE2.png'
}

export const Leather: Item = {
    name: 'Leather',
    description: '+1 Weight',
    type: 'Material',
    rarity: 'Common',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/6d/Leather_JE2_BE2.png'
}

export const EnchantedBook: Item = {
    name: 'Enchanted Book',
    description: '+1 Weight\n\n Used to enchant tools and weapons',
    type: 'Material',
    rarity: 'Rare',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/55/Enchanted_Book.gif'
}

export const Bowl: Item = {
    name: 'Bowl',
    description: '+1 Weight',
    type: 'Material',
    rarity: 'Common',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/82/Bowl_JE2_BE2.png'
}

export const Coal: Item = {
    name: 'Coal',
    description: '+1 Weight \n\n Fuel for furnaces',
    type: 'Material',
    rarity: 'Common',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/58/Coal_JE4_BE3.png'
}

export const GlowstoneDust: Item = {
    name: 'Glowstone Dust',
    description: '+1 Weight',
    type: 'Material',
    rarity: 'Epic',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/25/Glowstone_Dust_JE2_BE2.png'
}

export const RedstoneDust: Item = {
    name: 'Redstone Dust',
    description: '+1 Weight',
    type: 'Material',
    rarity: 'Rare',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e1/Redstone_Dust_JE2_BE2.png'
}

export const Gunpowder: Item = {
    name: 'Gunpowder',
    description: '+1 Weight',
    type: 'Material',
    rarity: 'Uncommon',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/40/Gunpowder_JE2_BE2.png'
}




export const GlassBottle: Item = {
    name: 'Glass Bottle',
    description: '+1 Weight\n\n Can be filled up with water',
    type: 'Misc',
    rarity: 'Common',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/fb/Glass_Bottle_JE2_BE2.png'
}

export const Bucket: Item = {
    name: 'Bucket',
    description: '+2 Weight\n\n Can be filled up',
    type: 'Misc',
    rarity: 'Common',
    weight: 2,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/fc/Bucket_JE2_BE2.png',
    components: [IronIngot]
}

export const Bone: Item = {
    name: 'Bone',
    description: '+1 Weight',
    type: 'Misc',
    rarity: 'Common',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft/images/2/25/BoneNew.png'
}
