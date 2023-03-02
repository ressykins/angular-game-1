export interface Item {
    name: string,
    description: string,
    type: string,
    rarity: string,
    weight: number,
    damage?: number | number[],
    defense?: number,
    durability?: number,
    picture: string,
    components?: Item[]
}