import React, { useReducer } from 'react';
import Context from './context';
import { IProvider } from './interfaces';
import reducer from './reducer';
import { INITIAL_STATE } from './types';

const Provider = (props: IProvider) => {

    const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
    
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