import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { Lesson } from '../interfaces/LessonInterface';


export type RootStackParams = {
  HomeScreen: undefined,
 // LessonScreen: { lesson: Lesson, color: string }
}


const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="HomeScreen" component={ HomeScreen } />
      {/* <Stack.Screen name="LessonScreen" component={ LessonScreen } /> */}
    </Stack.Navigator>
  );
}