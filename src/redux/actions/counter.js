/**
 * action
 */

export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const RESET = 'RESET'

export const increment = (count) => {
     return { type: INCREMENT, data: count }
}

export const decrement = () => {
    return { type: DECREMENT }
}

export const reset = () => {
    return { type: RESET }
}