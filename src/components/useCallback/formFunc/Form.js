import React, {useState, useCallback} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Input from './Input';

const Form = () => {
  const [firstInput, setFirstInput] = useState();
  const [secondInput, setSecondInput] = useState();
  const [thirdInput, setThirdInput] = useState();

  const handlerThirdInput = text => setThirdInput(text);

  return (
    <View>
      <Text style={styles.titleText}>Callbacks caching examples:</Text>
      <View>
        <Text>Using useCallback hook:</Text>
        <Input
          value={firstInput}
          onChange={useCallback(text => setFirstInput(text), [])}
        />
        <Text>Input value is: {firstInput}</Text>
      </View>
      <View>
        <Text>Using useCallback hook without two arg:</Text>
        <Input
          value={firstInput}
          // eslint-disable-next-line react-hooks/exhaustive-deps
          onChange={useCallback(text => setFirstInput(text))}
        />
        <Text>Input value is: {firstInput}</Text>
      </View>
      <View>
        <Text>Without useCallback hook:</Text>
        <Input value={secondInput} onChange={text => setSecondInput(text)} />
        <Text>Input value is: {secondInput}</Text>
      </View>
      <View>
        <Text>Without useCallback hook:</Text>
        <Input value={thirdInput} onChange={handlerThirdInput} />
        <Text>Input value is: {thirdInput}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Form;
