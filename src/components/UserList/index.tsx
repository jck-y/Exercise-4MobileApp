import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

const UserList = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const filteredData = response.data.map((item) => ({
          name: item.name,
          username: item.username,
          email: item.email,
          address: item.address,
          phone: item.phone,
        }));
        setUserData(filteredData);
      } catch (error) {
        console.error('error fetching', error);
      }
    };

    fetchData();
  }, []);

  return (
    <View>
      <Text style={style.welcome}>User List</Text>

      {userData && (
        <View>
          {userData.map((user, index) => (
            <View key={index} style={style.userContainer}>
              <Text style={style.label}>Name: {user.name}</Text>
              <Text>Username: {user.username}</Text>
              <Text>Email: {user.email}</Text>
              <Text>Address: {JSON.stringify(user.address)}</Text>
              <Text>Phone: {user.phone}</Text>
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  welcome: {
    marginTop: 50,
    marginLeft: 20,
    marginBottom: 30,
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
  },
  userContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  label: {
    fontWeight: 'bold',
  },
});

export default UserList;
