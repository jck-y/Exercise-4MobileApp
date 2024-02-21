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
        <View style={{marginBottom:55}}>
          {userData.map((user, index) => (
            <View key={index} style={style.userContainer}>
              <Text style={style.label}>Name: <Text style={style.txt}>{user.name}</Text></Text>
              <Text style={style.label}>Username: <Text style={style.txt}>{user.username}</Text></Text>
              <Text style={style.label}>Email: <Text style={style.txt}>{user.email}</Text></Text>
              <Text style={style.label}>Address: <Text style={style.txt}>{(user.address.street + ', ' + user.address.suite + ', ' + user.address.city + ', ' + user.address.zipcode)}</Text></Text>
              <Text style={style.label}>Phone: <Text style={style.txt}>{user.phone}</Text></Text>
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
    marginBottom: 20,
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
  },
  userContainer: {
    marginBottom: 20,
    padding: 10,
    borderRadius: 20,
    borderColor: 'grey',
    borderWidth: 1,
    marginLeft: 15,
    marginRight: 15,
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 3,
    color: 'black',
  },
  txt : {
    fontWeight:'normal',
    color: 'black',
  }
});

export default UserList;
