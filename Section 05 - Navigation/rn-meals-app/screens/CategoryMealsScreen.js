import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';

const CategoryMealsScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;

  const selectedCategory = CATEGORIES.find(
    (category) => category.id === categoryId
  );

  const availableMeals = useSelector((state) => state.meals.meals);
  const mealsForSelectedCategory = availableMeals.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  useEffect(() => {
    // Name and style our navigation header according to the category selected
    navigation.setOptions({
      title: selectedCategory.title,
      headerBackTitleStyle: { fontFamily: 'open-sans', fontSize: 10 },
      headerStyle: { backgroundColor: selectedCategory.color, fontSize: 5 },
      headerTintColor: 'white',
    });
  }, []);

  return (
    <MealList listData={mealsForSelectedCategory} navigation={navigation} />
  );
};

export default CategoryMealsScreen;
