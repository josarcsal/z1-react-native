import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { Lesson } from '../interfaces/LessonInterface';
import { LessonScreen } from '../screens/LessonScreen';


export type RootStackParams = {
  HomeScreen: undefined,
  LessonScreen: { lesson: Lesson }
}


const Stack = createStackNavigator<RootStackParams>();

export const Navigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: '#320e50'
        }
      }}
    >
      <Stack.Screen name="HomeScreen" component={ HomeScreen } />
      <Stack.Screen name="LessonScreen" component={ LessonScreen } />
    </Stack.Navigator>
  );
}