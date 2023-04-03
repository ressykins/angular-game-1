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
    enemyDesc: string,
    enemyType: string,
    specialActions: [string, number][],
}