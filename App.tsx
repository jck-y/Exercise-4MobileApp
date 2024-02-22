import React from 'react';
import { ScrollView } from 'react-native';
import Registration, { Title, Input, Button } from './src/components/Registration/index';
import UserList from './src/components/UserList';

const App = () => {
  return (
    <ScrollView>
      {/* <Registration/> */}
      <UserList/>
    </ScrollView>
  );
};

export default App;
