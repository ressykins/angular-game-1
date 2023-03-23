import { Enemy } from "./enemy";
import { Item } from "./item";
import { Location } from "./location";

export interface minezEvent {
    eventName: string,
    eventType: string,
    eventReward: Item[],
    eventDescription: string,
    eventIcon: string,

    eventCompleted?: boolean,
    eventRequirement?: Item[],
    eventEnemy?: Enemy[],
    eventBg?: string,
}