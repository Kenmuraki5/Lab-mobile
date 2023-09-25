import { MEALS } from "../../data/dummy-data";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
}

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const existingIndex = state.favoriteMeals.findIndex(fav => fav.id === action.mealId)
      if (existingIndex >= 0) {
        state.favoriteMeals.splice(existingIndex, 1);
        return state;
      }
      else{
        state.favoriteMeals.push(state.meals.find(meal => meal.id === action.mealId));
        return state;
      }
    default:
      return state;
  }
};

export default mealsReducer;
