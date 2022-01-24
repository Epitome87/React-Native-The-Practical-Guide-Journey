import React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import MealsTabNavigator from './MealsTabNavigator';
import { FiltersScreen } from '../screens';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        label='Close Drawer'
        onPress={() => props.navigation.closeDrawer()}
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
      <Drawer.Screen name='Favorites' component={MealsTabNavigator} />
      <Drawer.Screen name='Filters' component={FiltersScreen} />
    </Drawer.Navigator>
  );
};

export default MainDrawerNavigator;
