import { Item } from "./item";

export interface Enemy {
    enemyName: string,
    enemyHealth: number,
    enemyMaxHealth: number,
    enemyDamage: number,
    enemyDefense: number,
    enemySpeed: number,

    enemyDrops: [Item, number][],
    enemyPicture: string,
    enemySize: string,
    enemyDesc: string,
    enemyType: string,
    enemyActions: [string, number][],

    enemyDefeated?: boolean,
    summoningSickness?: boolean,
}