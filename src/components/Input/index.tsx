import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const Input = ({ text, placeholder, keyboardType,onChangeText }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{text}</Text>
      <TextInput 
        placeholder={placeholder} 
        style={styles.input}
        keyboardType={keyboardType} // Teruskan keyboardType di sini
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 24,
    marginLeft: 26, 
  },
  input: {
    borderWidth: 1,
    marginVertical: 10,
    borderRadius: 10,
    width:360,
  },
  text:{
    color: '#4d4d4d',
    fontSize: 19,
    fontWeight: '600',
  },
});

export default Input;
