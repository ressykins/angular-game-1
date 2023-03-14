import { Location } from "../interfaces/location";

export const Towns: Location[] = [
    {
        name: 'Pravus',
        picture: 'https://wiki.shotbow.net/images/5/5f/PravusNew.png',
        stage: 1,

        canRefill: true,
        canCraft: true,
        canCook: false,
        canRepair: true,
        canRest: true,
        canFish: true,
        canFarm: false,
        canDig: false,
        canMine: false,

        numCrops: 2,
        numFish: 3,
        numGraves: 1,
        numChests: 3,
        lootFoodTier: 1,
        lootToolTier: 1,
        lootMilitaryTier: 1,
        lootCivWeight: 25,
        lootFoodWeight: 50,
        lootToolWeight: 70,
        lootPotionWeight: 80,
        lootMilitaryWeight: 100,
    }
]