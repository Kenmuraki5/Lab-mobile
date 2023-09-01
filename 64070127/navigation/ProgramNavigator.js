import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Program from '../screens/Program';
import Readmore from '../screens/Detail';
import StudyPlan from '../screens/StudyPlan';
import { Header, createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();
const ProgramNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Program" component={Program} options={{title:"Bachelor Programs", headerStyle: { backgroundColor: "lightblue" }}}/>
      <Stack.Screen name="Readmore" component={Readmore} options={ ({route})=>({title:route.params.title,  headerStyle: { backgroundColor: "lightblue" },headerTintColor: "black" } )}/>
      <Stack.Screen name="StudyPlan" component={StudyPlan} options={ ({route})=>({title:route.params.title,  headerStyle: { backgroundColor: "lightblue" },headerTintColor: "black" } )}/>
    </Stack.Navigator>
  )
}

export default ProgramNavigator

const styles = StyleSheet.create({})