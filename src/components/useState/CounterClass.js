import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

class Counter extends Component {
  state = {count: 1};

  renderedCount = 0;

  handleOnPressBtn = () => this.setState(state => ({count: state.count + 1}));
  handleResetBtn = () => this.setState({count: 0});

  render() {
    const {count} = this.state;
    this.renderedCount++;

    return (
      <View>
        <Text>{count} likes</Text>
        <Button title="Like" onPress={this.handleOnPressBtn} />
        <Button title="reset" onPress={this.handleResetBtn} />
        <Text>
          Input component was rerendered
          {` ${this.renderedCount} `}
        </Text>
      </View>
    );
  }
}

export default Counter;
