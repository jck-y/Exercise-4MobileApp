import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';

export const Title = ({text}) => {
    return(
        <Text style={style.welcome}>{text}</Text>
    )
}

export const Input = ({ text, placeholder, keyboardType,onChangeText }) => {
    return (
      <View style={style.container}>
        <Text style={style.text}>{text}</Text>
        <TextInput 
          placeholder={placeholder} 
          style={style.input}
          keyboardType={keyboardType} // Teruskan keyboardType di sini
          onChangeText={onChangeText}
        />
      </View>
    );
};

export const Button = ({ onPress }) => {
    return (
      <View style={style.buttonRegister}>
        <TouchableOpacity style={style.button} onPress={onPress}>
        <Text style={{color: 'white', fontSize: 20}}>Register</Text>
        </TouchableOpacity>
      </View>
    );
};

const style = StyleSheet.create({
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
      text:{
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
