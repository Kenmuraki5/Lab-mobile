import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from "../screens/Home";
import Hello from "../screens/Hello"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function StackView() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} options={{headerShown:false}}/>
      <Tab.Screen name="hello" component={Hello} options={{headerShown:false}}/>
    </Tab.Navigator>
  );
}