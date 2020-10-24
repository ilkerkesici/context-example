import { createContext } from "react";
import { useDispatch } from "./abstraction";
import { IContext } from './interfaces';

const Context = createContext<IContext>({
        counter: 0, 
        secondCounter: 0
    });

export default Context;