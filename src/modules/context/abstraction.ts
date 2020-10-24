import { useContext as useOriginalContext } from 'react';
import context from './context';
 
/**
 * Use the context where you want
 */
export const useContext = () => {
    return useOriginalContext(context);
}

/**
 * Use dispatch function where you want
 */
export const useDispatch = () => {
    const { dispatch } = useContext();
    return dispatch;
}
