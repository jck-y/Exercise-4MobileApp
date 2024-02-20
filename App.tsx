import {
  ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import Title from './src/components/Title';
import Input from './src/components/Input';
import Button from './src/components/Button';
const App = () => {
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
      <Title text="REGISTER"/>
      <Input text="Name" placeholder="Masukan nama anda"onChangeText={setName} />
      <Input text="Username"placeholder="Masukan username anda" onChangeText={setUsername} />
      <Input text="Email" placeholder="Masukan email anda"  onChangeText={setEmail}/>
      <Input text="Address"placeholder="Masukan address anda" onChangeText={setAddress} />
      <Input keyboardType='number-pad' text="Phone Number" placeholder="Masukan nomor telepon anda" onChangeText={setPhoneNumber} />
      <Button onPress={handleRegister} />
    </ScrollView>
  );
};

export default App;
