import { MEALS } from "../../data/dummy-data";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
}

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE_FAVORITE':
      const existingIndex = state.favoriteMeals.findIndex(
        fav => fav.id === action.mealId
      );

      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex, 1);
        return { ...state, favoriteMeals: updatedFavMeals };
      } 
      else {
        const addnew = state.meals.find(meal => meal.id === action.mealId);
        const updatedFavMeals = [...state.favoriteMeals, addnew];
        return { ...state, favoriteMeals: updatedFavMeals };
      }
    default:
      return state;
  }
};
export default mealsReducer;
