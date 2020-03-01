import React, {useState, useCallback, useContext} from 'react';
import {View, Text} from 'react-native';
import Button from 'react-native-button';

import {ThemeContext} from '../../contexts/ThemeProvider';

const Counter = () => {
  const [count, setCount] = useState(0);

  const {theme} = useContext(ThemeContext);

  const handlePressLikeBtn = useCallback(
    () => setCount(value => value + 1),
    [],
  );

  return (
    <View>
      <Text>{count} likes</Text>
      <Button style={theme.button} onPress={handlePressLikeBtn}>
        Like
      </Button>
    </View>
  );
};

export default Counter;
