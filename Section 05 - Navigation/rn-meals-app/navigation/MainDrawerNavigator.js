import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { Platform } from 'react-native';
import MealsTabNavigator from './MealsTabNavigator';
import { FiltersScreen } from '../screens';
import colors from '../constants/colors';

// Options that will be shared by all screens within the Stack we are creating
const navigatorConfig = {
  initialRouteName: 'Meals',
  screenOptions: {
    headerShown: false,
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? colors.primaryColor : '',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : colors.primaryColor,
    headerTitleStyle: {
      fontFamily: 'open-sans-bold',
    },
  },
};

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} {...navigatorConfig}>
      {/* I'm not sure how to style items this way */}
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem
        label='Meals'
        onPress={() => props.navigation.navigate('Meals')}
        activeTintColor={colors.accentColor}
        labelStyle={{ fontFamily: 'open-sans-bold', fontSize: 20 }}
      />
      <DrawerItem
        label='Filters'
        onPress={() => props.navigation.navigate('Filters')}
        activeTintColor={colors.accentColor}
        labelStyle={{ fontFamily: 'open-sans-bold', fontSize: 20 }}
        headerShown={false}
      />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

const MainDrawerNavigator = () => {
  // TODO: Wrap in a Stack? We need a Header. Then we pass the Stack directly instead of FiltersScreen, which the Stack will have as a component

  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen
        name='Meals'
        component={MealsTabNavigator}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name='Filters'
        component={FiltersScreen}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigator;
