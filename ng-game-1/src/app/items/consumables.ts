import { Item } from "../interfaces/item";
import { Bowl, BrownMushroom, CocoaBeans, GlowstoneDust, GoldIngot, Gunpowder, IronIngot, NetherWart, Pumpkin, RedMushroom, RedstoneDust, Stone, StringItem, Sugar, SugarCane, Wheat } from "./materials";

/// RAW FOOD
export const Apple: Item = {
    name: 'Apple',
    description: '+10 Health\n+10 Thirst\n+10 Hunger\n+1 Weight',
    type: 'Consumable',
    rarity: 'Common',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/af/Apple_JE3_BE3.png',
    food: 'raw',
    health: 10,
    thirst: 10,
    hunger: 10
}

export const MelonSlice: Item = {
    name: 'Melon Slice',
    description: '+5 Health\n+5 Thirst\n+5 Hunger\n+1 Weight',
    type: 'Consumable',
    rarity: 'Common',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/f2/Melon_Slice_JE2_BE2.png',
    food: 'raw',
    health: 5,
    thirst: 5,
    hunger: 5
}

export const SweetBerries: Item = {
    name: 'Sweet Berries',
    description: '+5 Health\n+5 Hunger\n+1 Weight',
    type: 'Consumable',
    rarity: 'Common',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/12/Sweet_Berries_JE1_BE1.png',
    food: 'raw',
    health: 5,
    hunger: 5
}

export const Carrot: Item = {
    name: 'Carrot',
    description: '+10 Health\n+15 Hunger\n+1 Weight',
    type: 'Consumable',
    rarity: 'Common',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft/images/6/63/Carrot_Updated.png',
    food: 'raw',
    health: 10,
    hunger: 15
}

export const Potato: Item = {
    name: 'Potato',
    description: '+5 Health\n+5 Hunger\n+1 Weight',
    type: 'Consumable',
    rarity: 'Common',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft/images/c/c2/Potato.png',
    food: 'raw',
    health: 5,
    hunger: 5
}

export const Beetroot: Item = {
    name: 'Beetroot',
    description: '+5 Health\n+5 Hunger\n+1 Weight',
    type: 'Consumable',
    rarity: 'Common',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/12/Beetroot_JE2_BE2.png',
    food: 'raw',
    health: 5,
    hunger: 5
}

export const RawChicken: Item = {
    name: 'Raw Chicken',
    description: '+5 Health\n+5 Hunger\n+1 Weight',
    type: 'Consumable',
    rarity: 'Uncommon',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/51/Raw_Chicken_JE3_BE3.png',
    food: 'raw',
    health: 5,
    hunger: 5
}

export const RawRabbit: Item = {
    name: 'Raw Rabbit',
    description: '+5 Health\n+5 Hunger\n+1 Weight',
    type: 'Consumable',
    rarity: 'Uncommon',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/72/Raw_Rabbit_JE3_BE2.png',
    food: 'raw',
    health: 5,
    hunger: 5
}

export const RawPorkchop: Item = {
    name: 'Raw Porkchop',
    description: '+10 Health\n+10 Hunger\n+2 Weight\n\n',
    type: 'Consumable',
    rarity: 'Rare',
    weight: 2,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e0/Raw_Porkchop_JE3_BE3.png',
    food: 'raw',
    health: 10,
    hunger: 10
}

export const RawBeef: Item = {
    name: 'RawBeef',
    description: '+15 Health\n+15 Hunger\n+3 Weight\n\n',
    type: 'Consumable',
    rarity: 'Rare',
    weight: 3,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/0f/Raw_Beef_JE4_BE3.png',
    food: 'raw',
    health: 15,
    hunger: 15
}

export const RawFish: Item = {
    name: 'Raw Fish',
    description: '+5 Health\n+5 Hunger\n+1 Weight',
    type: 'Consumable',
    rarity: 'Common',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/ef/Raw_Cod_JE4_BE2.png',
    food: 'raw',
    health: 5,
    hunger: 5
}

export const Nemo: Item = {
    name: 'Nemo',
    description: '+10 Health\n+10 Hunger\n+1 Weight\n\npls no eat',
    type: 'Consumable',
    rarity: 'Epic',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/ad/Tropical_Fish_JE2_BE2.png',
    food: 'raw',
    health: 10,
    hunger: 10
}

export const RottenFlesh: Item = {
    name: 'Rotten Flesh',
    description: '-5 Health\n+5 Hunger\n+1 Weight\n\nAre you really that desperate?',
    type: 'Consumable',
    rarity: 'Common',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/ac/Rotten_Flesh_JE3_BE2.png',
    food: 'raw',
    health: -5,
    hunger: 5
}

export const PoisonousPotato: Item = {
    name: 'Poisonous Potato',
    description: '-15 Health\n-15 Hunger\n+1 Weight\n\nWow you really should not eat this...',
    type: 'Consumable',
    rarity: 'Uncommon',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c0/Poisonous_Potato_JE3_BE2.png',
    food: 'raw',
    health: -99,
    hunger: -99
}

export const Pufferfish: Item = {
    name: 'Pufferfish',
    description: '-45 Health\n-45 Hunger\n+1 Weight\n\nWow you really should not eat this...',
    type: 'Consumable',
    rarity: 'Rare',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/02/Pufferfish_(item)_JE5_BE2.png',
    food: 'raw',
    health: -99,
    thirst: -99
}

export const Egg: Item = {
    name: 'Egg',
    description: '+5 Health\n+5 Hunger\n+1 Weight',
    type: 'Consumable',
    rarity: 'Rare',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/96/Egg_JE2_BE2.png',
    food: 'raw',
    health: 5,
    hunger: 5
}























/// CRAFTED FOOD
export const Bread: Item = {
    name: 'Bread',
    description: '+15 Health\n+30 Hunger\n+1 Weight',
    type: 'Consumable',
    rarity: 'Uncommon',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/4/44/Bread_JE3_BE3.png',
    components: [Wheat, Wheat],
    food: 'crafted',
    health: 15,
    hunger: 30
}

export const BeetrootSoup: Item = {
    name: 'Beetroot Soup',
    description: '+15 Health\n+15 Hunger\n+15 Thirst\n+1 Weight',
    type: 'Consumable',
    rarity: 'Uncommon',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/6c/Beetroot_Soup_JE2_BE2.png',
    components: [Beetroot, Beetroot, Bowl],
    food: 'crafted',
    health: 15,
    thirst: 15,
    hunger: 15
}

export const MushroomStew: Item = {
    name: 'Mushroom Stew',
    description: '+30 Health\n+30 Thirst\n+30 Hunger\n+1 Weight',
    type: 'Consumable',
    rarity: 'Rare',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e0/Mushroom_Stew_JE2_BE2.png',
    components: [Bowl, RedMushroom, BrownMushroom],
    food: 'crafted',
    health: 15,
    hunger: 50,
    thirst: 20
}

export const SuspiciousStew: Item = {
    name: 'Suspicious Stew',
    description: '+1 Weight\n\nAnything could happen',
    type: 'Consumable',
    rarity: 'Epic',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/da/Suspicious_Stew_JE1_BE1.png',
    components: [Bowl, NetherWart],
    food: 'crafted',
    health: 0,
    thirst: 0,
    hunger: 0
}

export const GoldenCarrot: Item = {
    name: 'Golden Carrot',
    description: '+50 Health\n+50 Hunger\n+1 Weight',
    type: 'Consumable',
    rarity: 'Epic',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/aa/Golden_Carrot_JE4_BE2.png',
    components: [Carrot, GoldIngot],
    food: 'crafted',
    health: 50,
    hunger: 50
}










/// COOKED FOOD
export const BakedPotato: Item = {
    name: 'Baked Potato',
    description: '+20 Health\n+40 Hunger\n+1 Weight',
    type: 'Consumable',
    rarity: 'Uncommon',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/e0/Baked_Potato_JE4_BE2.png',
    food: 'cooked',
    health: 20,
    hunger: 40
}

export const CookedRabbit: Item = {
    name: 'Cooked Rabbit',
    description: '+25 Health\n+45 Hunger\n+1 Weight',
    type: 'Consumable',
    rarity: 'Rare',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/1/1b/Cooked_Rabbit_JE3_BE2.png',
    food: 'cooked',
    health: 25,
    hunger: 45
}

export const CookedFish: Item = {
    name: 'Cooked Fish',
    description: '+25 Health\n+40 Hunger\n+1 Weight',
    type: 'Consumable',
    rarity: 'Rare',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/53/Cooked_Cod_JE4_BE3.png',
    food: 'cooked',
    health: 25,
    hunger: 40
}

export const CookedChicken: Item = {
    name: 'Cooked Chicken',
    description: '+30 Health\n+45 Hunger\n+1 Weight',
    type: 'Consumable',
    rarity: 'Rare',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/66/Cooked_Chicken_JE3_BE3.png',
    food: 'cooked',
    health: 30,
    hunger: 45
}

export const CookedPorkchop: Item = {
    name: 'Cooked Porkchop',
    description: '+40 Health\n+60 Hunger\n+1 Weight',
    type: 'Consumable',
    rarity: 'Epic',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/ee/Cooked_Porkchop_JE4_BE3.png',
    food: 'cooked',
    health: 40,
    hunger: 60
}

export const Steak: Item = {
    name: 'Steak',
    description: '+45 Health\n+65 Hunger\n+1 Weight',
    type: 'Consumable',
    rarity: 'Epic',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/04/Steak_JE4_BE3.png',
    food: 'cooked',
    health: 45,
    hunger: 65
}

export const RabbitStew: Item = {
    name: 'Rabbit Stew',
    description: '+100 Health\n+100 Thirst\n+100 Hunger\n+1 Weight',
    type: 'Consumable',
    rarity: 'Legendary',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/0c/Rabbit_Stew_JE3_BE2.png',
    components: [Bowl, CookedRabbit, RedMushroom, BrownMushroom, BakedPotato, Carrot],
    food: 'cooked',
    health: 100,
    thirst: 100,
    hunger: 100
}
































/// DRINKS & MEDICAL SUPPLIES

export const Bandage: Item = {
    name: 'Bandage',
    description: '+10 Health\n+1 Weight\n\nCures Bleed',
    type: 'Consumable',
    rarity: 'Common',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/f2/Paper_JE2_BE2.png',
    components: [SugarCane, SugarCane],
    food: 'healing',
    health: 10
}

export const Milk: Item = {
    name: 'Milk',
    description: '+5 Health\n+10 Thirst\n+1 Weight\n\nCures Sickness',
    type: 'Consumable',
    rarity: 'Common',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/ca/Milk_Bucket_JE2_BE2.png',
    food: 'healing',
    health: 5,
    thirst: 15
}

export const WaterBottle: Item = {
    name: 'Water Bottle',
    description: '+50 Thirst\n+1 Weight',
    type: 'Consumable',
    rarity: 'Common',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/28/Potion_of_Absorption_BE2.png',
    food: 'healing',
    thirst: 50
}

export const HoneyBottle: Item = {
    name: 'Bottle of Honey',
    description: '+15 Health\n+25 Thirst\n+1 Weight\n\nCures Bleeding or Sickness',
    type: 'Consumable',
    rarity: 'Uncommon',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c2/Honey_Bottle_JE1_BE2.png',
    food: 'healing',
    health: 5,
    thirst: 25
}


export const HealPotI: Item = {
    name: 'Healing Potion I',
    description: '+40 Health\n+5 Thirst\n+1 Weight',
    type: 'Consumable',
    rarity: 'Rare',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/c/c2/Lingering_Potion_of_Healing_JE2_BE2.png',
    components: [WaterBottle, NetherWart],
    food: 'healing',
    health: 40,
    thirst: 5
}

export const HealPotII: Item = {
    name: 'Healing Potion II',
    description: '+60 Health\n+5 Thirst\n+1 Weight',
    type: 'Consumable',
    rarity: 'Epic',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/72/Splash_Potion_of_Healing_JE2_BE2.png',
    components: [HealPotI, RedstoneDust],
    food: 'healing',
    health: 60,
    thirst: 5
}

export const HealPotIII: Item = {
    name: 'Healing Potion III',
    description: '+80 Health\n+5 Thirst\n+1 Weight',
    type: 'Consumable',
    rarity: 'Legendary',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/6/64/Potion_of_Healing.gif',
    components: [HealPotII, GlowstoneDust],
    food: 'healing',
    health: 80,
    thirst: 5
}

export const Ale: Item = {
    name: 'Bottle of Ale',
    description: '-10 Health\n+20 Thirst\n+1 Weight\n\nIncreases your strength but lowers accuracy in battle',
    type: 'Consumable',
    rarity: 'Rare',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/72/Potion_of_Fire_Resistance.gif',
    components: [WaterBottle, Wheat, Sugar],
    food: 'healing',
    health: -10,
    thirst: 20
}

export const VegetableJuice: Item = {
    name: 'Vegetable Juice',
    description: '+25 Health\n+30 Thirst\n+1 Weight\n\nClears any status effects and prevents you from getting negative status effects',
    type: 'Consumable',
    rarity: 'Rare',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/db/Potion_of_Leaping.gif',
    components: [WaterBottle, Carrot, Pumpkin, Beetroot],
    food: 'healing',
    health: 25,
    thirst: 30
}



/// COMBAT



export const Cobweb: Item = {
    name: 'Cobweb',
    description: '+1 Weight\n\nThrow it to stun your enemies',
    type: 'Consumable',
    rarity: 'Uncommon',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/9/98/Cobweb_JE5.png',
    components: [StringItem, StringItem],
    combat: true
}

export const Snowball: Item = {
    name: 'Snowball',
    description: '+1 Weight\n\nThrow it to distract your enemies',
    type: 'Consumable',
    rarity: 'Common',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2a/Snowball_JE3_BE3.png',
    combat: true
}

export const Grenade: Item = {
    name: 'Grenade',
    description: '+1 Weight\n\nThrow it to deal some damage',
    type: 'Consumable',
    rarity: 'Uncommon',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/f/f6/Ender_Pearl_JE3_BE2.png',
    components: [Gunpowder, IronIngot],
    combat: true
}

export const Flashbang: Item = {
    name: 'Flashbang',
    description: '+1 Weight\n\nThrow it to stun your enemies',
    type: 'Consumable',
    rarity: 'Rare',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/d/d0/Slimeball_JE2_BE2.png',
    components: [Grenade, GlowstoneDust],
    combat: true
}

export const Incendiary: Item = {
    name: 'Incendiary',
    description: '+1 Weight\n\nThrow it to deal massive damage and inflict Burn',
    type: 'Consumable',
    rarity: 'Epic',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/0/08/Magma_Cream_JE3_BE2.png',
    components: [Grenade, RedstoneDust],
    combat: true
}





/// FOOD SWEETS

export const Cookie: Item = {
    name: 'Cookie',
    description: '+10 Health\n+10 Hunger\n+1 Weight',
    type: 'Consumable',
    rarity: 'Rare',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/b/b3/Cookie_JE2_BE2.png',
    components: [Wheat, CocoaBeans],
    food: 'sweet',
    health: 10,
    hunger: 10
}

export const PumpkinPie: Item = {
    name: 'Pumpkin Pie',
    description: '+30 Health\n+30 Hunger\n+2 Weight',
    type: 'Consumable',
    rarity: 'Epic',
    weight: 2,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/a/ac/Pumpkin_Pie_JE2_BE2.png',
    components: [Pumpkin, Sugar, Egg],
    food: 'sweet',
    health: 30,
    hunger: 30
}

export const Cake: Item = {
    name: 'Cake',
    description: '+60 Health\n+60 Hunger\n+4 Weight',
    type: 'Consumable',
    rarity: 'Legendary',
    weight: 4,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/5/53/Cake_JE4.png',
    components: [Milk, Egg, Wheat, Sugar],
    food: 'sweet',
    health: 60,
    hunger: 60
}

export const GoldenApple: Item = {
    name: 'Cake',
    description: '+100 Health\n+100 Hunger\n+1 Weight',
    type: 'Consumable',
    rarity: 'Legendary',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/e/ed/Enchanted_Golden_Apple_JE2_BE2.gif',
    components: [Apple, GoldIngot, GlowstoneDust, RedstoneDust, NetherWart],
    food: 'sweet',
    health: 100,
    hunger: 100
}

export const Cocktail: Item = {
    name: 'Fruit Cocktail',
    description: '+100 Thirst\n+1 Weight\n\nYum',
    type: 'Consumable',
    rarity: 'Rare',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/8/82/Potion_of_Harming.gif',
    components: [WaterBottle, Sugar, Apple, MelonSlice, SweetBerries],
    food: 'sweet',
    thirst: 100
}



/// MISC


export const Button: Item = {
    name: 'Button',
    description: '+1 Weight\n\nThis can be used to open a locked door',
    type: 'Button',
    rarity: 'Rare',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/3/3c/Polished_Blackstone_Button_JE1.png'
}

export const MysteriousArtifact: Item = {
    name: 'Mysterious Artifact',
    description: '+1 Weight',
    type: 'Consumable',
    rarity: 'Legendary',
    weight: 1,
    picture: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/2/2e/Totem_of_Undying_JE2_BE2.png'
}

