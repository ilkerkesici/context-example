import React, { useCallback } from 'react';
import { useDispatch } from '../../modules/context'
import { Button } from 'modules/components';
import { INCREMENT_SECOND_COUNTER } from 'modules/context/types';

/**
 * Button for increment second text
 */
const MyButton = () => {
    const dispatch = useDispatch();
    
    const incrementCounter = useCallback(() => {
        dispatch && dispatch({type: INCREMENT_SECOND_COUNTER});
    }, [])

    return (
        <Button onPress={incrementCounter}>Press Me For Second</Button>
    );
}

export default MyButton;