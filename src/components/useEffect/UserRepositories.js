import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {View, Text} from 'react-native';

function UserRepositories({login}) {
  const [repositoryList, setRepositoryList] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}/repos`)
      .then(res => res.json())
      .then(setRepositoryList);
  }, [login]);

  return (
    <View>
      {repositoryList.map(repository => (
        <Text key={repository.id}>{repository.name}</Text>
      ))}
    </View>
  );
}

UserRepositories.propTypes = {
  login: PropTypes.string.isRequired,
};

export default UserRepositories;
