import React from 'react';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';

const FavoritesScreen = ({ navigation }) => {
  // TODO: Use the user's real list of Favorites, rather than hard-coding these two
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);
  return <MealList listData={favoriteMeals} navigation={navigation} />;
};

export default FavoritesScreen;
