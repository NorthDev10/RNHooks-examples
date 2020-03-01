import React, {useState, useRef} from 'react';
import {View, Text, Button} from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);
  const renderedCount = useRef(0);

  const handlePressBtn = () => setCount(value => value + 1);
  const handleResetBtn = () => setCount(0);

  renderedCount.current++;
  return (
    <View>
      <Text>{count} likes</Text>
      <Button title="Like" onPress={handlePressBtn} />
      <Button title="reset" onPress={handleResetBtn} />
      <Text>
        Input component was rerendered
        {` ${renderedCount.current} `}
      </Text>
    </View>
  );
};

export default Counter;
