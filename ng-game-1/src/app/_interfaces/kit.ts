import { Item } from "./item";


export interface Kit {
    name: string,
    description: string,
    inventory: Item[]
}