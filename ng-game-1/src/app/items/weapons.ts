import { Item } from "../interfaces/item";

export const WoodenSword: Item = {
    name: 'Wooden Sword',
    description: '+4 Damage\n+5 Weight',
    type: 'Weapon',
    rarity: 'Common',
    weight: 5,
    damage: 4,
    durability: 30,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d5/Wooden_Sword_JE2_BE2.png'
}

export const EnchantedWoodenSword: Item = {
    name: 'Enchanted Wooden Sword',
    description: '+5 Damage\n+5 Weight',
    type: 'Weapon',
    rarity: 'Uncommon',
    weight: 5,
    damage: 5,
    durability: 40,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c1/Enchanted_Wooden_Sword.gif'
}

export const Bow: Item = {
    name: 'Bow',
    description: '3-7 Damage\n+8 Weight',
    type: 'Weapon',
    rarity: 'Uncommon',
    weight: 8,
    damage: [3,4,5,6,7],
    durability: 60,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/99/Bow_JE2_BE1.png'
}