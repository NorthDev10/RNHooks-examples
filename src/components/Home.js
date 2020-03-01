import React from 'react';
import {View} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Button from 'react-native-button';

import styles from '../themes/styles';

const Home = () => {
  return (
    <View>
      <Button style={styles.button} onPress={Actions.counterHome}>
        useState
      </Button>
      <Button style={styles.button} onPress={Actions.userListHome}>
        useEffect
      </Button>
      <Button style={styles.button} onPress={Actions.callbacksCaching}>
        useCallback
      </Button>
      <Button style={styles.button} onPress={Actions.fibonacciHome}>
        useMemo
      </Button>
      <Button style={styles.button} onPress={Actions.counterStyledHome}>
        useContext
      </Button>
      <Button style={styles.button} onPress={Actions.autosaveFormHome}>
        custom hooks
      </Button>
    </View>
  );
};

export default Home;
