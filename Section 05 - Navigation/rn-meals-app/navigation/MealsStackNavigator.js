import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  CategoriesScreen,
  CategoryMealsScreen,
  MealDetailScreen,
} from '../screens';
import colors from '../constants/colors';

// Options that will be shared by all screens within the Stack we are creating
const navigatorConfig = {
  initialRouteName: 'Categories',
  screenOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
    },
    headerBackTitleStyle: { fontFamily: 'open-sans' },
    headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor,
    headerTitleStyle: {
      fontFamily: 'open-sans-bold',
    },
  },
};

const MealsStackNavigator = ({ navigation }) => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator {...navigatorConfig}>
      <Stack.Screen
        name='Categories'
        component={CategoriesScreen}
        options={{
          headerTitle: 'Meal Categories',
        }}
      />
      <Stack.Screen name='CategoryMeals' component={CategoryMealsScreen} />
      <Stack.Screen name='MealDetail' component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

export default MealsStackNavigator;
