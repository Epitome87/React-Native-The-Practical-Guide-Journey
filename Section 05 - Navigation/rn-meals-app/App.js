import React, { useState } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font'; // Outdated font usage?
import { useFonts } from 'expo-font'; // New way to use fonts?
import AppLoading from 'expo-app-loading';
import {
  // MealsStackNavigator,
  MealsFavoriteTabNavigator,
} from './navigation/MealsNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  CategoriesScreen,
  CategoryMealsScreen,
  MealDetailScreen,
  FavoritesScreen,
} from './screens';
import colors from './constants/colors';
import { enableScreens } from 'react-native-screens';
import MealsStackNavigator from './navigation/MealsStackNavigator';
import MealsTabNavigator from './navigation/MealsTabNavigator';

enableScreens();

const fetchFonts = () => {
  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

export default function App() {
  const [isFontLoaded, setIsFontLoaded] = useState(false);
  const [isLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  // if (!isFontLoaded) {
  if (!isLoaded) {
    return (
      <AppLoading
        // startAsync={fetchFonts}
        onFinish={() => setIsFontLoaded(true)}
        onError={console.warning}
      />
    );
  }

  return (
    <NavigationContainer>
      <MealsTabNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
