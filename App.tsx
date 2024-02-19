import {
  View,
  StyleSheet,
} from 'react-native';
import React from 'react';
import Title from './src/components/Title';
import Input from './src/components/Input';
import Button from './src/components/Button';
const App = () => {
  return (
    <View>
      <Title/>
      <Input text="Username" placeholder="Masukan username anda" />
      <Input text="Password"placeholder="Masukan password anda" />
      <Button/>
    </View>
  );
};

const style = StyleSheet.create({
  btnlog: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});
export default App;
