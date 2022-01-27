import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import MealList from '../components/MealList';
import DefaultText from '../components/DefaultText';

const FavoritesScreen = ({ navigation }) => {
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  // Render some fallback texts if we have no favorite meals yet
  if (!favoriteMeals || favoriteMeals.length === 0) {
    return (
      <View style={styles.content}>
        <DefaultText>
          No favorite meals found. Browse meals and try adding some!
        </DefaultText>
      </View>
    );
  }

  // Otherwise, render our list of favorite meals
  return <MealList listData={favoriteMeals} navigation={navigation} />;
};

const styles = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
  },
});

export default FavoritesScreen;
