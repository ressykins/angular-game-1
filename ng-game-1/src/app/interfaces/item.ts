export interface Item {
    name: string,
    description: string,
    type: string,
    rarity: string,
    weight: number,
    picture: string,

    combat?: boolean,
    weapon?: string,
    damage?: number,
    defense?: number,
    durability?: number,

    components?: Item[],

    equipped?: boolean,

    furnace?: boolean,
    food?: string,
    health?: number,
    hunger?: number,
    thirst?: number
}