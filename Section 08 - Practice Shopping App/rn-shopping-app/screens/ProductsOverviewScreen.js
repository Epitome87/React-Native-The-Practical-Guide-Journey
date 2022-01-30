import React, { useEffect } from 'react';
import { FlatList, Platform, StyleSheet, View } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch, useSelector } from 'react-redux';
import * as cartActions from '../store/actions/cart';
import ProductItem from '../components/shop/ProductItem';
import HeaderButton from '../components/UI/HeaderButton';

const ProductsOverviewScreen = ({ navigation }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.availableProducts);

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
      headerRight: () => {
        return (
          <HeaderButtons HeaderButtonComponent={HeaderButton}>
            <Item
              title='Cart'
              iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
              onPress={() => {
                navigation.navigate('Cart');
              }}
            />
          </HeaderButtons>
        );
      },
    });
  }, [navigation]);

  const renderListItem = (item) => {
    return (
      <ProductItem
        title={item.item.title}
        price={item.item.price}
        image={item.item.imageUrl}
        onViewDetail={() => {
          navigation.navigate('Product Details', {
            productId: item.item.id,
            title: item.item.title,
          });
        }}
        onAddToCart={() => {
          dispatch(cartActions.addItem(item.item));
        }}
      />
    );
  };

  return (
    <View>
      <FlatList
        keyExtractor={(item) => item.id}
        data={products}
        renderItem={renderListItem}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ProductsOverviewScreen;
