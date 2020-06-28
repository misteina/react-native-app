import 'react-native-gesture-handler';
import React from 'react';
//import Register from './pages/register';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
          <Stack.Navigator>
              <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}