import React, { useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import CategoryTile from '../components/CategoryTile';
import HeaderButton from '../components/HeaderButton';
import { CATEGORIES } from '../data/dummy-data';

const CategoriesScreen = (props) => {
  // The navigation passed automatically from the native stack navigator
  const { navigation } = props;
  useEffect(() => {
    navigation.setOptions({
      // ! For some reason, icons render wrong (text, not image) if we do this in the StackNavigator instead of the component itself?
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
