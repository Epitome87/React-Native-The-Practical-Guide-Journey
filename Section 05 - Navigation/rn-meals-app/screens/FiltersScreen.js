import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DefaultText from '../components/DefaultText';
import FilterSwitch from '../components/FilterSwitch';

const FiltersScreen = ({ navigation }) => {
  // TODO: Uncomment this if I decide I need to wrap FiltersScree inside a StackNavigator
  // useEffect(() => {
  //   navigation.setOptions({
  //     title: "Filter Meals",
  //     headerStyle: { backgroundColor: selectedCategory.color },
  //     headerTintColor: 'white',
  //   });
  // }, []);

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
