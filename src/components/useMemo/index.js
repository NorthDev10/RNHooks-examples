import React from 'react';
import {View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';

import styles from '../../themes/styles';

const Home = () => {
  return (
    <View>
      <Button style={styles.button} onPress={Actions.fibonacciClass}>
        Fibonacci as class component
      </Button>
      <Button style={styles.button} onPress={Actions.fibonacci}>
        Fibonacci as functional component
      </Button>
    </View>
  );
};

export default Home;
