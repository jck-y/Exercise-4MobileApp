import React, {useEffect, useState} from 'react';
import {ScrollView, View, Text, StyleSheet} from 'react-native';
import axios from 'axios';
import UserList from './src/components/UserList';
import {Title, Input, Button} from './src/components/Registration/index';

const App = () => {
  const [userData, setUserData] = useState(null);
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  
  const handleRegister = () => {
    console.log('Name:', name);
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Address:', address);
    console.log('Phone Number:', phoneNumber);
  };
  return (
    <ScrollView>
      <Title text="Registration" />
      <Input
        text="Name"
        placeholder=" Masukan nama anda"
        onChangeText={setName}
      />
      <Input
        text="Username"
        placeholder=" Masukan username anda"
        onChangeText={setUsername}
      />
      <Input
        text="Email"
        placeholder=" Masukan email anda"
        onChangeText={setEmail}
      />
      <Input
        text="Address"
        placeholder=" Masukan address anda"
        onChangeText={setAddress}
      />
      <Input
        keyboardType="numeric"
        text="Phone Number"
        placeholder=" Masukan nomor telepon anda"
        onChangeText={setPhoneNumber}
      />
      <Button onPress={handleRegister} />
    {/* <UserList/> */}
    </ScrollView>
  );
};

export default App;
