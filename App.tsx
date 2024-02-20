import {ScrollView, View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import axios from 'axios';
import Title from './src/components/Title';
import Input from './src/components/Input';
import Button from './src/components/Button';
const App = () => {
  const [userData, setUserData] = useState(null);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users');
          const filteredData = response.data.map(item => ({
            name: item.name,
            username: item.username,
            email: item.email,
            address: item.address,
            phone: item.phone
          }))
        setUserData(filteredData);
      } catch (error) {
        console.error('error fetching', error);
      }
    };

    fetchData();
    return () => {};
  }, []);

  const handleRegister = () => {
    console.log('Name:', name);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Phone Number:', phoneNumber);
  };
  return (
    <ScrollView>

      {userData && (
        <View>
          {/* <Text>Data JSON:</Text> */}
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

      <Title text="Register" />
      <Input
        text="Name"
        placeholder="Masukan nama anda"
        onChangeText={setName}
      />
      <Input
        text="Username"
        placeholder="Masukan username anda"
        onChangeText={setUsername}
      />
      <Input
        text="Email"
        placeholder="Masukan email anda"
        onChangeText={setEmail}
      />
      <Input
        text="Address"
        placeholder="Masukan address anda"
        onChangeText={setAddress}
      />
      <Input
        keyboardType="numeric"
        text="Phone Number"
        placeholder="Masukan nomor telepon anda"
        onChangeText={setPhoneNumber}
      />
      <Button onPress={handleRegister} />
    </ScrollView>
  );
};
const style = StyleSheet.create({
  userContainer: {
    flex: 1,
    padding: 20,
  },
    label: {
        fontWeight: 'bold',
        color:'black',
      },
    });
export default App;
