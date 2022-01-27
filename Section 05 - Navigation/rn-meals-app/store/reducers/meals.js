import { MEALS } from '../../data/dummy-data';
import { SET_FILTERS, TOGGLE_FAVORITE } from '../actions/meals';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS, // Filter set to include All Meals at start
  favoriteMeals: [],    // No favorites to start
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE: 
      const existingIndex = state.favoriteMeals.findIndex(meal => meal.id === action.mealId);
      // Meal isn't already a favorite...
      if (existingIndex < 0) {
        // ...so make it a favorite!
        const newFavMeal = state.meals.find(meal => meal.id === action.mealId);
        return { ...state, favoriteMeals: [...state.favoriteMeals, newFavMeal]}
      } else {
        // Remove this meal from our Favorites
        return { ...state, favoriteMeals: state.favoriteMeals.filter(meal => meal.id !== action.mealId) }
      }
    default: 
      return state;
  }
};

export default mealsReducer;
