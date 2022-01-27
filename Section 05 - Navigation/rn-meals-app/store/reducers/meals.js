import { MEALS } from '../../data/dummy-data';
import { SET_FILTERS, TOGGLE_FAVORITE } from '../actions/meals';

const initialState = {
  meals: MEALS, // Our hard-coded list of dummy meals
  filteredMeals: MEALS, // Filter set to include All Meals at start
  favoriteMeals: [], // No favorites to start
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );
      // if Meal isn't already a favorite...
      if (existingIndex < 0) {
        // ...make it a favorite!
        const newFavMeal = state.meals.find(
          (meal) => meal.id === action.mealId
        );
        return {
          ...state,
          favoriteMeals: [...state.favoriteMeals, newFavMeal],
        };
      } else {
        // If it's already a favorite, remove this meal from Favorites
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.filter(
            (meal) => meal.id !== action.mealId
          ),
        };
      }
    case SET_FILTERS:
      const appliedFilters = action.filters;
      
      // Check each meal...
      const filteredMeals = state.meals.filter((meal) => {
        // For each filter, if it is set to True yet our meal has it as false, return false
        if (appliedFilters.glutenFree && !meal.isGlutenFree) {
          return false;
        }
        if (appliedFilters.lactoseFree && !meal.isLactoseFree) {
          return false;
        }
        if (appliedFilters.vegan && !meal.isVegan) {
          return false;
        }
        if (appliedFilters.vegetarian && !meal.isVegetarian) {
          return false;
        }
        // If we passed all filter checks, we found a Meal that meets our critia!
        return true;
      });
      return { ...state, filteredMeals: filteredMeals };
    default:
      return state;
  }
};

export default mealsReducer;
