import React from 'react'
import styles from './styles';
import { IButton } from './interfaces';
import { TouchableOpacity } from 'react-native';
import { Text } from '../text';

/**
 * Generic button component for the project
 * @param props is proporties of the button
 */
const Button = (props: IButton) => {
    const { onPress, children, style } = props;
    return(
        <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    );
}

export default Button;