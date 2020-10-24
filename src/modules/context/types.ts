import { IState } from "./interfaces";

/**
 * Reducer types
 */
export const INCREMENT_COUNTER = 'increment_counter';
export const INCREMENT_SECOND_COUNTER = 'increment_second_counter';


/**
 * Initial state
 */
export const INITIAL_STATE: IState = {
    counter: 0,
    secondCounter: 0
}