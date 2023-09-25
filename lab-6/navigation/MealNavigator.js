import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, TouchableOpacity } from "react-native";
import CategoriesScreen from "../screens/CategoriesScreen"
import CategoryMealsScreen from '../screens/CategoryMealsScreen'
import MealDetailScreen from '../screens/MealDetailScreen'
import { Header, Icon } from '@rneui/themed';
import { useDispatch } from 'react-redux'
import { toggleFavorite } from "../store/actions/mealsAction";
// import คอมโพเนนต์ที่จำเป็น

const MealsNavigator = createNativeStackNavigator();
export default function App() {
  const dispatch = useDispatch();
  const toggleFavoriteHandler = (mealId) => {
    dispatch(toggleFavorite(mealId));
  };
  // เพิ่มโค้ดส่วนนี้ เพื่อจัดการ Stack Navigation
  return (
    <MealsNavigator.Navigator>
      <MealsNavigator.Screen name="CategoriesScreen" component={CategoriesScreen} options={{ title: 'Meal Categories', headerStyle: { backgroundColor: "#4a148c" }, headerTintColor: "white" }} />
      <MealsNavigator.Screen name="CategoryMealsScreen" component={CategoryMealsScreen} options={({ route }) => ({ title: route.params.categoryTitle, headerStyle: { backgroundColor: "#4a148c" }, headerTintColor: "white" })} />
      <MealsNavigator.Screen name="MealDetailScreen" component={MealDetailScreen} options={({ route }) => ({
        title: route.params.categoryTitle, headerStyle: { backgroundColor: "#4a148c" }, headerTintColor: "white",
        headerRight: () => (
          <TouchableOpacity onPress={()=> toggleFavoriteHandler(route.params.mealid)}>
            <Icon name="star" size={24} color="yellow" style={{ marginRight: 10 }}/>
          </TouchableOpacity>
        )
      })} />
    </MealsNavigator.Navigator>
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
