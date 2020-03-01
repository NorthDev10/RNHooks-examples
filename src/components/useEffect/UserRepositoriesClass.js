import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

class UserRepositories extends Component {
  static propTypes = {
    login: PropTypes.string.isRequired,
  };

  state = {repositoryList: {}};

  componentDidUpdate(prevProps) {
    const {login} = this.props;

    if (prevProps.login !== login) {
      fetch(`https://api.github.com/users/${login}/repos`)
        .then(res => res.json())
        .then(repositoryList => this.setState({repositoryList}));
    }
  }

  render() {
    const {repositoryList} = this.state;

    return (
      <View>
        {repositoryList.map(repository => (
          <Text key={repository.id}>{repository.name}</Text>
        ))}
      </View>
    );
  }
}

export default UserRepositories;
