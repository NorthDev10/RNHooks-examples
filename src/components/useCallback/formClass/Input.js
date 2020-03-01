import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TextInput, StyleSheet} from 'react-native';

class Input extends PureComponent {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired,
  };

  renderedCount = 0;

  render() {
    const {value, onChange} = this.props;
    this.renderedCount++;

    return (
      <View>
        <TextInput
          value={value}
          style={styles.textInput}
          onChangeText={onChange}
        />
        <Text>
          Input component was rerendered
          <Text style={styles.renderedCount}>{` ${this.renderedCount} `}</Text>
          times
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {height: 40, borderColor: 'gray', borderWidth: 1},
  renderedCount: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Input;
