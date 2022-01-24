import React from 'react';
import MealList from '../components/MealList';
import { MEALS } from '../data/dummy-data';

const FavoritesScreen = ({ navigation }) => {
  // TODO: Use the user's real list of Favorites, rather than hard-coding these two
  const favoriteMeals = MEALS.filter(
    (meal) => meal.id === 'm1' || meal.id === 'm2'
  );
  return <MealList listData={favoriteMeals} navigation={navigation} />;
};

export default FavoritesScreen;
