import React, { useEffect } from 'react';
import { FlatList, Platform, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';
import ProductItem from '../components/shop/ProductItem';

const UserProductsScreen = ({ navigation }) => {
  const userProducts = useSelector((state) => state.products.userProducts);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title='Menu'
              iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
              onPress={() => {
                navigation.toggleDrawer();
              }}
            />
          </HeaderButtons>
        );
      },
    });
  }, [navigation]);

  const renderedItem = (itemData) => {
    const { title, price, imageUrl } = itemData.item;
    return (
      <ProductItem
        title={title}
        price={price}
        image={imageUrl}
        onViewDetail={() => {}}
        onAddToCart={() => {}}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={userProducts}
      renderItem={renderedItem}
    />
  );
};

const styles = StyleSheet.create({});

export default UserProductsScreen;
