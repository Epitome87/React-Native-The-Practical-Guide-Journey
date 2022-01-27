import React, { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';
import DefaultText from '../components/DefaultText';
import FilterSwitch from '../components/FilterSwitch';
import HeaderButton from '../components/HeaderButton';
import { setFilters } from '../store/actions/meals';

const FiltersScreen = ({ navigation }) => {
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVegetarian, setIsVegetarian] = useState(false);

  const dispatch = useDispatch();

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
          <Item title='Save' iconName='ios-save' onPress={saveFilters} />
        </HeaderButtons>
      ),
    });
  }, [navigation, isGlutenFree, isVegan, isVegetarian, isLactoseFree]); // For the call to saveFilters in the Header's onPress to have the
  // latest copies of our gluttenFree / etc state, we have to mark those as dependencies

  const saveFilters = () => {
    const appliedFilters = {
      glutenFree: isGlutenFree,
      lactoseFree: isLactoseFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
    };

    dispatch(setFilters(appliedFilters));
  };

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
