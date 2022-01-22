import React, { useEffect } from 'react';
import { FlatList, View, Text, StyleSheet } from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

const CategoryMealsScreen = ({ navigation, route }) => {
  const { categoryId } = route.params;

  const selectedCategory = CATEGORIES.find(
    (category) => category.id === categoryId
  );

  const mealsForSelectedCategory = MEALS.filter((meal) =>
    meal.categoryIds.includes(categoryId)
  );

  useEffect(() => {
    // Name and style our navigation header according to the category selected
    navigation.setOptions({
      title: selectedCategory.title,
      headerStyle: { backgroundColor: selectedCategory.color },
      headerTintColor: 'white',
    });
  }, []);

  const renderedMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          navigation.navigate('MealDetail', { mealId: itemData.item.id });
        }}
      />
    );
  };

  return (
    <View style={[styles.screen]}>
      <Text>{selectedCategory.title}</Text>
      <FlatList
        data={mealsForSelectedCategory}
        keyExtractor={(item, index) => item.id}
        renderItem={renderedMealItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoryMealsScreen;
