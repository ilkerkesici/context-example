import React, { useReducer } from 'react';
import Context from './context';
import { IProvider, IState } from './interfaces';
import reducer from './reducer';

const Provider = (props: IProvider) => {
    let initialState: IState = {
        counter: 0,
        secondCounter: 0
    };

    const [state, dispatch] = useReducer(reducer, initialState);
    
    return (
        <Context.Provider value={{
            ...state,
            dispatch
        }}>
            {props.children}
        </Context.Provider>
    );
};

export default Provider;