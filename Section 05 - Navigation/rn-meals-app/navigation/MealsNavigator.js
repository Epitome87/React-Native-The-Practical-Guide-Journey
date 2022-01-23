import * as React from 'react';
import { View, Text } from 'react-native';
import {
  NavigationContainer,
  //   createAppContainer,
} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMealsScreen from '../screens/CategoryMealsScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const MealsStackNavigator = createNativeStackNavigator();
const MealsFavoriteTabNavigator = createBottomTabNavigator();

export { MealsStackNavigator, MealsFavoriteTabNavigator };
// export default createAppContainer(MealsNavigator);
