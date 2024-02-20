import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
const Button = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text >Register</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 24, // agar buttonnya kebawah
      },
    button: {
        backgroundColor: '#F27108',
        height:40,
        marginHorizontal:27,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8,
    },
})
export default Button;
