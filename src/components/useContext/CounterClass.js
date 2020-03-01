import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Button from 'react-native-button';

import {ThemeContext} from '../../contexts/ThemeProvider';

class Counter extends Component {
  state = {count: 1};

  static contextType = ThemeContext;

  handleOnPressBtn = () => this.setState(state => ({count: state.count + 1}));

  render() {
    const {count} = this.state;
    const {theme} = this.context;

    return (
      <View>
        <Text>{count} likes</Text>
        <Button style={theme.button} onPress={this.handleOnPressBtn}>
          Like
        </Button>
      </View>
    );
  }
}

export default Counter;
