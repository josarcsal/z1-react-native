import React from 'react';
import { Text } from 'react-native';
import { Navigator } from './src/navigator/Navigator';
import { NavigationContainer } from '@react-navigation/native';
import { HomeScreen } from './src/screens/HomeScreen';

const App = () => {
  return (
    <NavigationContainer>
      <HomeScreen />
    </NavigationContainer>
  )
}

export default App;
