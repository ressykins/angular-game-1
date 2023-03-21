import { minezEvent } from "../interfaces/event";
import { HealPotI } from "../items/consumables";
import { Pravus, Towns } from "../locations/towns";

export const Events: minezEvent[] = [{
    eventName: 'Dawn Brigade Cantina',
    eventType: 'Battle',
    eventReward: [HealPotI],
    eventLocation: Pravus,
    eventDescription: 'In search of basic supplies, you come across an abandoned underground cantina, but the ominous groans of the undead echo from within...',
    eventIcon: 'https://static.wikia.nocookie.net/minecraft_gamepedia/images/7/72/Potion_of_Fire_Resistance.gif'

}]