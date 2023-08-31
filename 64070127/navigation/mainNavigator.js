import { StyleSheet, Text, View } from 'react-native'
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react'
import StackView from './StackNavigator.js';
const Drawer = createDrawerNavigator();
const MyNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="mainNavigator" component={StackView} />
    </Drawer.Navigator>
  )
}

export default MyNavigator

const styles = StyleSheet.create({})