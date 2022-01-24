import React from 'react';
import { Platform, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'; // For Android-like appearance
import { Ionicons } from '@expo/vector-icons';
import MealsStackNavigator from './MealsStackNavigator';
import colors from '../constants/colors';
import FavoritesStackNavigator from './FavoritesStackNavigator';

// Options that will be shared by all screens within the Stack we are creating
const stackConfig = {
  initialRouteName: 'All',
  screenOptions: {
    headerStyle: {
      // TODO: Remove? We hide header on mobile platforms anyways
      backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
    },
    headerShown: false,
    headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor,
    tabBarActiveTintColor: colors.accentColor,
    headerTitleStyle: {
      fontFamily: 'open-sans-bold',
    },
    tabBarLabelStyle: { fontFamily: 'open-sans-bold' },
  },
};

// Alter / add additional optons for Android.
if (Platform.OS === 'android') {
  stackConfig.activeColor = '#f0edf6';
  stackConfig.inactiveColor = '#6e6e6e';
  stackConfig.labeled = true; // Remove labels. Probably undo this.
  stackConfig.shifting = true; // Only active tab gets a label
}

const MealsTabNavigator = () => {
  let Tab;
  if (Platform.OS === 'android') {
    Tab = createMaterialBottomTabNavigator();
  } else {
    Tab = createBottomTabNavigator();
  }

  return (
    <Tab.Navigator {...stackConfig}>
      <Tab.Screen
        name='All'
        component={MealsStackNavigator}
        options={{
          //   title: 'All Meals',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-restaurant' color={color} size={20} />
          ),
          tabBarColor: colors.primaryColor,
          tabBarLabel:
            Platform.OS === 'android' ? (
              <Text style={{ fontFamily: 'open-sans-bold' }}>Meals</Text>
            ) : (
              'Meals'
            ),
        }}
      />
      <Tab.Screen
        name='Favorites'
        component={FavoritesStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name='ios-star' color={color} size={20} />
          ),
          tabBarColor: colors.accentColor,
          tabBarLabel:
            Platform.OS === 'android' ? (
              <Text style={{ fontFamily: 'open-sans-bold' }}>Favorites</Text>
            ) : (
              'Favorites'
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default MealsTabNavigator;
