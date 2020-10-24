import React, { useMemo } from 'react';
import { Text } from 'react-native';
import { useContext } from '../../modules/context'
import styles from './styles';



const MyText = () => {
    const context = useContext();
    const { counter } = context;
    return useMemo(() => { // Because of unnecessary re-rendering
        return (
            <Text style={styles.text}>{counter}</Text>
        );
    }, [counter ])
}

export default MyText;