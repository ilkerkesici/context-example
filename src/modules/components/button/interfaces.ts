import { ViewStyle } from "react-native";

export interface IButton {
    onPress: () => void,
    children?: string,
    style?: ViewStyle
}