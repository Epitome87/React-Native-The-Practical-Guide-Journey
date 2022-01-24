import React from 'react';
import { Platform } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {
  CategoriesScreen,
  CategoryMealsScreen,
  MealDetailScreen,
} from '../screens';
import colors from '../constants/colors';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { HeaderButton } from '../components/HeaderButton';

// Options that will be shared by all screens within the Stack we are creating
const navigatorConfig = {
  initialRouteName: 'Categories',
  screenOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor,
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
          headerTitle: 'Meal Categories', // This gets priority over setting the title via navigation.setOptions in the actual component
          // TODO: uncomment this
          //   headerLeft: () => (
          //     <HeaderButtons HeaderButtonComponent={HeaderButton}>
          //       <Item
          //         title='Menu'
          //         iconName='ios-menu'
          //         onPress={() => {
          //           navigation.toggleDrawer();
          //         }}
          //       />
          //     </HeaderButtons>
          //   ),
        }}
      />
      <Stack.Screen name='CategoryMeals' component={CategoryMealsScreen} />
      <Stack.Screen name='MealDetail' component={MealDetailScreen} />
    </Stack.Navigator>
  );
};

export default MealsStackNavigator;
