import React, {memo, useCallback} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput, StyleSheet} from 'react-native';

const Input = ({label, name, value, errors, onChange}) => {
  const handleChangeField = useCallback(
    text => onChange({fieldName: name, value: text}),
    [name, onChange],
  );

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.textInput}
        value={value}
        onChangeText={handleChangeField}
      />
      <Text style={styles.error}>{errors[name] ? errors[name] : ''}</Text>
    </View>
  );
};

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  errors: PropTypes.object,
  onChange: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
  },
  textInput: {
    backgroundColor: '#f2f2f2',
  },
  error: {
    color: 'red',
  },
});

export default memo(Input);
