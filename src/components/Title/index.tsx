import { View,Text,StyleSheet } from "react-native";
import React from 'react';

const Title = ({text}) => {
    return(
        <Text style={style.welcome}>{text}</Text>
    )
}
const style = StyleSheet.create({
    welcome: {
        marginTop: 50,
        marginLeft: 20,
        fontSize: 50,
        fontWeight: 'bold',
        color: 'black',
      },
    });
export default Title;