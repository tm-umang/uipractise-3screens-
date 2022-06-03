import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Card from '../screens/Card';
import Add from '../screens/Add';
import Money from '../screens/Money';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/HomeScreen';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused
              ? 'home'
              : 'home-outline';
          } else if (route.name === 'Card') {
            iconName = focused ? 'card' : 'card-outline';
          }
          else if (route.name === 'Add') {
            iconName = focused ? 'add-circle' : 'add-circle-outline';
          }
          else if (route.name === 'Money') {
            iconName = focused ? 'cash' : 'cash-outline';
          }
          else{
            iconName = focused ? 'person-circle' : 'person-circle-outline';
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#3F4882',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
        tabBarStyle: {
          backgroundColor:'#F3F8FE',
          borderTopWidth:0,

          }
      })}
      >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Card" component={Card} />
      <Tab.Screen name="Add" component={Add} />
      <Tab.Screen name="Money" component={Money} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
