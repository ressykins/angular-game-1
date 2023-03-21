import { Item } from "./item";
import { Location } from "./location";

export interface minezEvent {
    eventName: string,
    eventType: string,
    eventReward: Item[],
    eventLocation: Location,
    eventDescription: string,
    eventIcon: string,
    
    // eventEnemy?: Enemy
}