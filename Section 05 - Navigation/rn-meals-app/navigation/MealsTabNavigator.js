import React from 'react';
import { Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import MealsStackNavigator from './MealsStackNavigator';
import { FavoritesScreen } from '../screens';
import colors from '../constants/colors';

// Options that will be shared by all screens within the Stack we are creating
const navigatorConfig = {
  initialRouteName: 'Favorites',
  screenOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'web' ? colors.primaryColor : '',
    },
    headerShown: false,
    headerTintColor: Platform.OS === 'web' ? 'white' : colors.primaryColor,
    tabBarActiveTintColor: colors.accentColor,
  },
};

const MealsTabNavigator = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator {...navigatorConfig}>
      <Tab.Screen
        name='All'
        component={MealsStackNavigator}
        options={{
          title: 'All Meals',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-restaurant' color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name='Favorites'
        component={FavoritesScreen}
        options={{
          headerShown: true,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-star' color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MealsTabNavigator;
