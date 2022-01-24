import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font'; // Outdated font usage?
import { useFonts } from 'expo-font'; // New way to use fonts?
import AppLoading from 'expo-app-loading';

import { enableScreens } from 'react-native-screens';
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
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
