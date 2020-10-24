import { createContext } from "react";
import { INITIAL_STATE } from './types';
import { IContext } from './interfaces';

const Context = createContext<IContext>(INITIAL_STATE);

export default Context;