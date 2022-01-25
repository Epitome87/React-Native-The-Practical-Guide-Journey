import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { FiltersScreen } from '../screens';
import colors from '../constants/colors';

// Options that will be shared by all screens within the Stack we are creating
const navigatorConfig = {
  initialRouteName: 'Filters',
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

const FiltersStackNavigator = ({ navigation }) => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator {...navigatorConfig}>
      <Stack.Screen name='Filters' component={FiltersScreen} />
    </Stack.Navigator>
  );
};

export default FiltersStackNavigator;
