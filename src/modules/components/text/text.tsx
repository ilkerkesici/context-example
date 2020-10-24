import React from 'react';
import { Text } from 'react-native';
import { IText } from './interfaces';
import styles from './styles';

/**
 * The generic text component for the project
 * The purpose of the component, if we want to change somethings for all app texts, we can change from here
 * @param props is properties of the text component
 */
const CustomText = (props: IText) => {
    const extraStyle = [];
    const { style, title, children } = props;
    if (title) extraStyle.push(styles.title);
    extraStyle.push(style);
    return (
        <Text style={extraStyle}>{children}</Text>
    );
}

export default CustomText;