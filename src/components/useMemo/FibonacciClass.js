import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}
class Fibonacci extends Component {
  state = {count: 0, count2: 0, memoizedValue: 0};

  componentDidUpdate(prevProps, prevState) {
    const {count} = this.state;

    if (prevState.count !== count) {
      const memoizedValue = fib(count);
      this.setState({memoizedValue});
    }
  }

  handleOnPressBtn = () => this.setState({count: this.state.count + 1});
  handleOnPressBtn2 = () => this.setState({count2: this.state.count2 + 1});

  render() {
    const {count, memoizedValue, count2} = this.state;

    return (
      <View>
        <Text>
          {count} - {memoizedValue} - {count2}
        </Text>
        <Button title="counter1" onPress={this.handleOnPressBtn} />
        <Button title="counter2" onPress={this.handleOnPressBtn2} />
      </View>
    );
  }
}

export default Fibonacci;
