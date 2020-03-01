import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

function UserList() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    fetch('https://api.github.com/users')
      .then(res => res.json())
      .then(setUserList);
  }, []);

  return (
    <View>
      {userList.map(user => (
        <Text key={user.id}>{user.login}</Text>
      ))}
    </View>
  );
}

export default UserList;
