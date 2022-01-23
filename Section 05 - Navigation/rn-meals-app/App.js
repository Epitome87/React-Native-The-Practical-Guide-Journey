import React, { useState } from 'react';
import { StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font'; // Outdated font usage?
import { useFonts } from 'expo-font'; // New way to use fonts?
import AppLoading from 'expo-app-loading';
import MealsNavigator from './navigation/MealsNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  CategoriesScreen,
  CategoryMealsScreen,
  MealDetailScreen,
} from './screens';
import colors from './constants/colors';
import { enableScreens } from 'react-native-screens';

enableScreens();

const fetchFonts = () => {
  Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
};

// Options that will be shared by all screens within the Stack we are creating
const navigatorConfig = {
  initialRouteName: 'Categories',
  screenOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'web' ? colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'web' ? 'white' : colors.primaryColor,
  },
};

const Stack = createNativeStackNavigator();

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
      <Stack.Navigator {...navigatorConfig}>
        <Stack.Screen
          style={{ padding: 56 }}
          name='Categories'
          component={CategoriesScreen}
          options={{
            headerTitle: 'Meal Categories', // This gets priority over setting the title via navigation.setOptions in the actual component
          }}
        />
        <Stack.Screen name='CategoryMeals' component={CategoryMealsScreen} />
        <Stack.Screen name='MealDetail' component={MealDetailScreen} />
      </Stack.Navigator>
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
