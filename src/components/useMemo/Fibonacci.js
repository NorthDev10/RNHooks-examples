import React, {useState, useMemo, useCallback} from 'react';
import {View, Text, Button} from 'react-native';

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

const Fibonacci = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleOnPressBtn = useCallback(() => setCount(count + 1), [count]);
  const handleOnPressBtn2 = useCallback(() => setCount2(count2 + 1), [count2]);
  const memoizedValue = useMemo(() => fib(count), [count]);

  return (
    <View>
      <Text>
        {count} - {memoizedValue} - {count2}
      </Text>
      <Button title="counter1" onPress={handleOnPressBtn} />
      <Button title="counter2" onPress={handleOnPressBtn2} />
    </View>
  );
};

export default Fibonacci;
