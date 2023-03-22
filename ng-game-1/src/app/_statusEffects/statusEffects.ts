import { StatusEffect } from "../_interfaces/statuseffect";

export const Normal: StatusEffect = {
    statusName: 'Normal',
    statusDescription: 'You look fine!'
}

export const Dead: StatusEffect = {
    statusName: 'Dead',
    statusDescription: 'RIP.'
}

export const WellFed: StatusEffect = {
    statusName: 'Well Fed',
    statusDescription: 'Hunger will not deplete!'
}

export const Healthy: StatusEffect = {
    statusName: 'Healthy',
    statusDescription: 'You are resistant to negative status effects!'
}

export const HypedUp: StatusEffect = {
    statusName: 'Hyped Up',
    statusDescription: 'You are now faster!'
}

export const Tipsy: StatusEffect = {
    statusName: 'Tipsy',
    statusDescription: 'Your attacks deal more damage at the cost of accuracy.'
}

export const Bleeding: StatusEffect = {
    statusName: 'Bleeding',
    statusDescription: 'You cannot heal!'
}

export const Sick: StatusEffect = {
    statusName: 'Sick',
    statusDescription: 'You cannot replenish hunger!'
}