import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, Image, Button, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Spring from "./screen/Spring"
import Sequence from './screen/Sequence';
import Parrarel from './screen/Parrarel';
const Tab = createBottomTabNavigator();

export default function MyStack() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Spring" component={Spring} options={{ title: 'lab7.1' }} />
        <Tab.Screen name="Sequence" component={Sequence} options={{ title: 'lab7.2' }} />
        <Tab.Screen name="Parrarel" component={Parrarel} options={{ title: 'lab7.3' }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
