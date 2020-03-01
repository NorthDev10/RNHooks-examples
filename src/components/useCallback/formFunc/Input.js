import React, {memo, useRef} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const Input = ({value, onChange}) => {
  const renderedCount = useRef(0);
  renderedCount.current++;

  return (
    <View>
      <TextInput
        value={value}
        style={styles.textInput}
        onChangeText={onChange}
      />
      <Text>
        Input component was rerendered
        <Text style={styles.renderedCount}>{` ${renderedCount.current} `}</Text>
        times
      </Text>
    </View>
  );
};

Input.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  textInput: {height: 40, borderColor: 'gray', borderWidth: 1},
  renderedCount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default memo(Input);
