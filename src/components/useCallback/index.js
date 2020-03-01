import React from 'react';
import {View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';

import styles from '../../themes/styles';

const Home = () => {
  return (
    <View>
      <Button
        style={styles.button}
        onPress={Actions.functionHandlerClassComponent}>
        Functions in a class component
      </Button>
      <Button
        style={styles.button}
        onPress={Actions.functionHandlerFuncComponent}>
        Functions in a functional component
      </Button>
    </View>
  );
};

export default Home;
