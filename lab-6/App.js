import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyNavigator from './navigation/MyNavigator';
import { createStore, combineReducers } from 'redux';
import mealsReducer from './store/reducers/MealsReducer';
import { Provider } from 'react-redux';
import MealsFavTabNavigator from './navigation/MealsFavTabNavigator';

const rootReducer = combineReducers({
  meals: mealsReducer
}) 

const store = createStore(rootReducer);

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
       <MyNavigator/>
      </NavigationContainer>
    </Provider>
  );
}
