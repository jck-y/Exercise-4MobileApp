import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const Input = ({ text, placeholder, keyboardType, onChangeText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <TextInput 
        placeholder={placeholder} 
        style={styles.input}
        keyboardType={keyboardType}
        onChangeText={onChangeText} 
      />
    </View>
  );
};

const Button = ({ onPress }) => {
  return (
    <View style={styles.buttonRegister}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={{ color: 'white', fontSize: 20 }}>Register</Text>
      </TouchableOpacity>
    </View>
  );
};

export const Registration = () => {
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
    <View>
      <Text style={styles.welcome}>Registration</Text>
      <Input text="Name" placeholder="Masukkan nama anda" onChangeText={setName} />
      <Input text="Username" placeholder="Masukkan username anda" onChangeText={setUsername} />
      <Input text="Email" placeholder="Masukkan email anda" onChangeText={setEmail} />
      <Input text="Address" placeholder="Masukkan address anda" onChangeText={setAddress} />
      <Input keyboardType="numeric" text="Phone Number" placeholder="Masukkan nomor telepon anda" onChangeText={setPhoneNumber} />
      <Button onPress={handleRegister} />
    </View>
  );
};

const styles = StyleSheet.create({
  welcome: {
    marginTop: 50,
    marginLeft: 20,
    fontSize: 50,
    fontWeight: 'bold',
    color: 'black',
  },
  container: {
    paddingTop: 20,
    marginLeft: 10, 
  },
  input: {
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 10,
    width: 380,
    marginLeft: 5,
  },
  text: {
    color: 'black',
    fontSize: 19,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#C238CE',
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    width: 380,
    marginLeft: 18,
  },
  buttonRegister: {
    marginTop: 25,
  }
});

export default Registration;
