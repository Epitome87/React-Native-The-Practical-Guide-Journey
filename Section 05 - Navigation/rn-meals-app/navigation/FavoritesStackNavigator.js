import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../constants/colors';
import { FavoritesScreen, MealDetailScreen } from '../screens';

const Stack = createNativeStackNavigator();

// Options that will be shared by all screens within the Stack we are creating
const favoritesStackConfig = {
  initialRouteName: 'Categories',
  screenOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor,
  },
};

const FavoritesStackNavigator = () => {
  return (
    <Stack.Navigator {...favoritesStackConfig}>
      <Stack.Screen
        name='CategoryMeals'
        component={FavoritesScreen}
        options={{ headerTitle: 'Your Favorites' }}
      />
      <Stack.Screen name='MealDetail' component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

export default FavoritesStackNavigator;
