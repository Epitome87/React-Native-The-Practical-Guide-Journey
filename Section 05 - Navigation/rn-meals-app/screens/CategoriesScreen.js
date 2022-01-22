import React, { useEffect } from 'react';
import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { CATEGORIES } from '../data/dummy-data';
import CategoryTile from '../components/CategoryTile';

const CategoriesScreen = (props) => {
  // The navigation passed automatically from the native stack navigator
  const { navigation } = props;

  useEffect(() => {
    // Name and style our navigation header according to the category selected
    // TODO: Remove this: just testing!
    navigation.setOptions({
      title: 'LOL',
      headerTitleStyle: {
        fontWeight: 800,
      },
    });
  }, []);

  const renderGridItem = (itemData) => {
    return (
      <CategoryTile
        title={itemData.item.title}
        color={itemData.item.color}
        onSelect={() => {
          navigation.navigate('CategoryMeals', {
            categoryId: itemData.item.id,
          });
        }}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item, index) => item.id}
      data={CATEGORIES}
      renderItem={renderGridItem}
      numColumns={2}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CategoriesScreen;
