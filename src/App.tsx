import React, { ReactNode } from 'react';
import {
  View
} from 'react-native';
import  { Provider } from './modules/context';
import { Button, SecondButton, MyText, MySecondText } from './components';
import styles from './styles';

/**
 * the provider is app provider for context
 * If we want to add new state,
 * first, add your state and type to /modules/interfaces IState and IContext
 * second, you can add it to the reducer and update the status where you want
 */
const App: () => ReactNode = () => {
  return (
    <Provider>
      <View style={styles.container}>
        <Button />
        <MyText />
        <SecondButton />
        <MySecondText />
      </View>
    </Provider>
  );
};

export default App;


