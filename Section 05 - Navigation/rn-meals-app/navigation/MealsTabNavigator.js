import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MealsStackNavigator from './MealsStackNavigator';
import { FavoritesScreen } from '../screens';

const MealsTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator>
      <Tab.Screen name='All' component={MealsStackNavigator} />
      <Tab.Screen name='Favorites' component={FavoritesScreen} />
    </Tab.Navigator>
  );
};

export default MealsTabNavigator;
