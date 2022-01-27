import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as Font from 'expo-font'; // Outdated font usage?
import { useFonts } from 'expo-font'; // New way to use fonts?
import AppLoading from 'expo-app-loading';
import { enableScreens } from 'react-native-screens';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import mealsReducer from './store/reducers/meals';
import MainDrawerNavigator from './navigation/MainDrawerNavigator';

// TODO: Find better way to solve warning for fontFamily being overwritten
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Overwriting fontFamily style attribute preprocessor']);

enableScreens();

const rootReducer = combineReducers({
  meals: mealsReducer,
});

const store = createStore(rootReducer);

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
    <Provider store={store}>
      <NavigationContainer>
        <MainDrawerNavigator />
      </NavigationContainer>
    </Provider>
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
