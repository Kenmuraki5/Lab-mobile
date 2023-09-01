import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ProgramNavigator from '../navigation/ProgramNavigator'
import Home from "../screens/Home"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Tab.Screen name="ProgramNavigator" component={ProgramNavigator} options={{headerShown:false}} />
    </Tab.Navigator>
  );
}