import React, {Component} from 'react';
import {View, Text} from 'react-native';

class UserList extends Component {
  state = {userList: []};

  componentDidMount() {
    fetch('https://api.github.com/users')
      .then(res => res.json())
      .then(userList => this.setState({userList}));
  }

  render() {
    const {userList} = this.state;

    return (
      <View>
        {userList.map(user => (
          <Text key={user.id}>{user.login}</Text>
        ))}
      </View>
    );
  }
}

export default UserList;
