import { Item } from "./item";

export interface Location {
    name: string,
    picture: string,
    stage: number,

    canRefill: boolean,
    canCraft: boolean,
    canCook: boolean,
    canRepair: boolean,
    canRest: boolean,
    canFish: boolean,
    canFarm: boolean,
    canDig: boolean,
    canMine: boolean,

    numChests: number,
    numGraves?: number,
    numFish?: number,
    numCrops?: number,
    nextStages?: number,
    mineTier?: number,
    lootCivWeight: number,
    lootFoodTier: number,
    lootFoodWeight: number,
    lootToolTier: number,
    lootToolWeight: number,
    lootPotionWeight: number,
    lootMilitaryTier: number,
    lootMilitaryWeight: number,

    lootSpecial?: number,
    events?: boolean,
}