import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import CategoriesScreen from "./screens/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import MealDetailScreen from "./screens/MealDetailScreen"
// import คอมโพเนนต์ที่จำเป็น

const Stack = createStackNavigator();

export default function App() {
  // เพิ่มโค้ดส่วนนี้ เพื่อจัดการ Stack Navigation
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={CategoriesScreen}
          options={{
            headerStyle: { backgroundColor: "#4a148c", },
            headerTintColor: "white",
          }} />
        <Stack.Screen name="CategoryMeals" component={CategoryMealsScreen}
          options={
            ({ route }) => ({
              title: route.params.title,
              headerStyle: { backgroundColor: "#4a148c", },
              headerTintColor: "white",
            })
          } />
        <Stack.Screen name="MealDetail" component={MealDetailScreen}
          options={({ route }) => ({
            title:route.params.title,
            headerStyle: { backgroundColor: "#4a148c", },
            headerTintColor: "white",
          })} />
      </Stack.Navigator>
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
    alignItems: "center",
    justifyContent: "center",
  },
});
