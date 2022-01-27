import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { CATEGORIES } from '../data/dummy-data';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

const CategoryMealsScreen = ({ navigation, route }) => {
  // We navigated to this Screen via: navigation.navigate('CategoryMeals', { categoryId: itemData.item.id });
  // This gives us access to categoryId in our route.params object
  const { categoryId } = route.params;

  // Based on the category ID found in the route, retrieve information about this Category
  const selectedCategory = CATEGORIES.find(
    (category) => category.id === categoryId
  );

  // Select all meals that fit the current filter criteria
  const filteredMeals = useSelector((state) => state.meals.filteredMeals);

  // And then all the above meals that are in our current Category
  const filteredMealsInCategory = filteredMeals.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  useEffect(() => {
    // Title and style our navigation header according to the category selected
    navigation.setOptions({
      title: selectedCategory.title,
      headerBackTitleStyle: { fontFamily: 'open-sans', fontSize: 10 },
      headerStyle: { backgroundColor: selectedCategory.color, fontSize: 5 },
      headerTintColor: 'white',
    });
  }, []);

  if (!filteredMealsInCategory || filteredMealsInCategory.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>No meals found. Try again with fewer filters.</DefaultText>
      </View>
    );
  }

  return (
    <MealList listData={filteredMealsInCategory} navigation={navigation} />
  );
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});

export default CategoryMealsScreen;
