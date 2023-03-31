import { minezEvent } from "../_interfaces/event";
import { Ale, Cocktail, HealPotI } from "../_items/consumables";
import { Pravus, Towns } from "../_locations/towns";
import { Zombie } from "../_mobs/enemies";

export const PravusEvent1: minezEvent = {
    eventName: 'Dawn Brigade Cantina',
    eventType: 'Battle',
    eventReward: [Ale,Cocktail],
    eventDescription: 'In search of supplies, you come across an abandoned underground cantina, but an ominous groans echoes from within...',
    eventIcon: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/72/Potion_of_Fire_Resistance.gif',
    eventEnemy: [Zombie]
}