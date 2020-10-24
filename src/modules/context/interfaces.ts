import { Dispatch, ReactNode } from "react";

export interface IState {
    counter: number,
    secondCounter: number
}

export interface IContext {
    counter: number,
    secondCounter: number,
    dispatch?: Dispatch<IAction>
}

export interface IAction {
    payload?: any,
    type: string
}

export interface IProvider {
    children: ReactNode
}

export interface SelectorProvider {
    children: ReactNode,
    value: any
}