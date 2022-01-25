import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import DefaultText from '../components/DefaultText';
import FilterSwitch from '../components/FilterSwitch';
import HeaderButton from '../components/HeaderButton';

const FiltersScreen = ({ navigation, route }) => {
  useEffect(() => {
    navigation.setOptions({
      title: 'Filter Meals',
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title='Menu'
            iconName='ios-menu'
            onPress={() => {
              navigation.toggleDrawer();
            }}
          />
        </HeaderButtons>
      ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title='Save'
            iconName='ios-save'
            onPress={() => {
              alert('Saved!');
              route.params.save();
            }}
          />
        </HeaderButtons>
      ),
    });
  }, []);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };

    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian]);

  useEffect(() => {
    navigation.setParams({ save: saveFilters });
  }, [saveFilters]);

  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  return (
    <View style={styles.screen}>
      <DefaultText bold style={styles.title}>
        Available Filters / Restrictions
      </DefaultText>
      <FilterSwitch
        label='Gluten-free'
        value={isGlutenFree}
        onValueChange={(newValue) => {
          setIsGlutenFree(newValue);
        }}
      />
      <FilterSwitch
        label='Lactose-free'
        value={isLactoseFree}
        onValueChange={(newValue) => {
          setIsLactoseFree(newValue);
        }}
      />
      <FilterSwitch
        label='Vegan'
        value={isVegan}
        onValueChange={(newValue) => {
          setIsVegan(newValue);
        }}
      />
      <FilterSwitch
        label='Vegetarian'
        value={isVegetarian}
        onValueChange={(newValue) => {
          setIsVegetarian(newValue);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    margin: 20,
    textAlign: 'center',
  },
});

export default FiltersScreen;
