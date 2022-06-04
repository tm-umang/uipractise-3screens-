import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './src/screens/Login';
import TabNavigation from './src/navigatioon/TabNavigation';
import Card from './src/screens/Card';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Tab" component={TabNavigation} />
        <Stack.Screen name="details" component={Card} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
