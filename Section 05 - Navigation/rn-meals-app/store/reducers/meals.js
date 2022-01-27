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
    case SET_FILTERS:
      const appliedFilters = action.filters;
			// Check all meals if there are any matches with the filters...
			const filteredMeals = state.meals.filter((meal) => {
				// If meal should be glutenFree but it is not, return false.
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
				// If we pass all the checks, then we have a meal...
				return true;
			});
			// Return a new state.
			return {...state, filteredMeals: filteredMeals}
    default: 
      return state;
  }
};

export default mealsReducer;
