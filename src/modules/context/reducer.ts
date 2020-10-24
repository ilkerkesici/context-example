import { INCREMENT_COUNTER, INCREMENT_SECOND_COUNTER } from "./types";
import { IState, IAction } from './interfaces';

export default (state: IState, action: IAction) => {
  const { type } = action;

  switch (type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case INCREMENT_SECOND_COUNTER:
      return {
        ...state,
        secondCounter: state.secondCounter + 1,
      };
    default:
      return state;
  }
};