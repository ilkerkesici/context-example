import React from 'react';
import {
  View
} from 'react-native';
import  { Provider } from './modules/context';
import { Button, SecondButton, MyText, MySecondText } from './components';
import styles from './styles';


const App = () => {
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


