import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FiltersScreen = ({ navigation }) => {
  // TODO: Uncomment this if I decide I need to wrap FiltersScree inside a StackNavigator
  // useEffect(() => {
  //   navigation.setOptions({
  //     title: "Filter Meals",
  //     headerStyle: { backgroundColor: selectedCategory.color },
  //     headerTintColor: 'white',
  //   });
  // }, []);

  return (
    <View style={styles.screen}>
      <Text>Filter Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default FiltersScreen;
