import React, { useCallback } from 'react';
import { useDispatch } from 'modules/context'
import { Button } from 'modules/components';
import { INCREMENT_COUNTER } from 'modules/context/types';

/**
 * Button for increment first text
 */
const MyButton = () => {
    const dispatch = useDispatch();
    
    const incrementCounter = useCallback(() => {
        dispatch && dispatch({type: INCREMENT_COUNTER});
    }, [])

    return (
        <Button onPress={incrementCounter}>Press Me</Button>
    );
}

export default MyButton;