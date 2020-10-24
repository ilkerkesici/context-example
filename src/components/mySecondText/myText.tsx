
import React, { useMemo, useState } from 'react';
import { Text } from 'react-native';
import { useContext } from '../../modules/context';
import styles from './styles';


const MyText = () => {
    const context = useContext();
    const { secondCounter } = context;
    return useMemo(() => {  // Because of unnecessary re-rendering
        return (
            <Text style={styles.text}>{secondCounter}</Text>
        );;
    }, [secondCounter])
}

export default MyText;