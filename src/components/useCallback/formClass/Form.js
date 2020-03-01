import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Input from './Input';

class Form extends Component {
  state = {firstInput: '', secondInput: ''};

  handlerFirstInput = firstInput => this.setState({firstInput});

  render() {
    const {firstInput, secondInput} = this.state;

    return (
      <View>
        <Text style={styles.titleText}>Callbacks caching examples:</Text>
        <View>
          <Input value={firstInput} onChange={this.handlerFirstInput} />
          <Text>Input value is: {firstInput}</Text>
        </View>
        <View>
          <Input
            value={secondInput}
            onChange={text => this.setState({secondInput: text})}
          />
          <Text>Input value is: {secondInput}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Form;
