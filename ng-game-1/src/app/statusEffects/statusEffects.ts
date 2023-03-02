import { StatusEffect } from "../interfaces/statuseffect";

export const Healthy: StatusEffect = {
    statusName: 'Healthy',
    statusDuration: 99,
    statusDescription: 'You look fine, for the most part...'
}

export const Dead: StatusEffect = {
    statusName: 'Dead',
    statusDuration: 99,
    statusDescription: 'RIP.'
}