import React from 'react';
import {View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';

import styles from '../../themes/styles';

const Home = () => {
  return (
    <View>
      <Button style={styles.button} onPress={Actions.counterClass}>
        Counter as class component
      </Button>
      <Button style={styles.button} onPress={Actions.counterFunc}>
        Counter as functional component
      </Button>
    </View>
  );
};

export default Home;
