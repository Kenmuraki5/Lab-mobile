import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from "../screens/Home";
import Hello from "../screens/Hello"
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function StackView() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="hello" component={Hello} />
    </Stack.Navigator>
  );
}