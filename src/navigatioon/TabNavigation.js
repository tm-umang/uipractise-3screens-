import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  Image,
} from 'react-native';
import Card from '../screens/Card';
import Add from '../screens/Add';
import Money from '../screens/Money';
import Profile from '../screens/Profile';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../screens/HomeScreen';
import { Images } from '../images/Images';

const Tab = createBottomTabNavigator();
export default function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
    }}>
      <Tab.Screen options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <>
              <Image
                source={focused ? Images.homeFill : Images.home}
                resizeMode={"contain"}
                style={{width:20,height:20,tintColor:focused ? '#3F4882' : 'black'}}
              />
            </>
          ),
        }} name="Home" component={Home} />
      <Tab.Screen options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <>
              <Image
                source={focused ? Images.cardFill : Images.card}
                resizeMode={"contain"}
                style={{width:20,height:20,tintColor:focused ?'#3F4882' : 'black'}}
              />
            </>
          ),
        }} name="Card" component={Card} />
      <Tab.Screen options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <>
              <Image
                source={focused ? Images.add : Images.add}
                resizeMode={"contain"}
                style={{width:20,height:20,tintColor:focused ?'#3F4882' : 'black'}}
              />
            </>
          ),
        }} name="Add" component={Add} />
      <Tab.Screen options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <>
              <Image
                source={focused ? Images.dolar : Images.dolar}
                resizeMode={"contain"}
                style={{width:20,height:20,tintColor:focused ?'#3F4882' : 'black'}}
              />
            </>
          ),
        }} name="Money" component={Money} />
      <Tab.Screen options={{
          title: "",
          tabBarIcon: ({ focused }) => (
            <>
              <Image
                source={focused ? Images.profileFill : Images.profile}
                resizeMode={"contain"}
                style={{width:20,height:20,tintColor:focused ?'#3F4882' : 'black'}}
              />
            </>
          ),
        }} name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
 