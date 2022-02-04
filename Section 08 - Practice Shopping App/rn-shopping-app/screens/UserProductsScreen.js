import React, { useEffect } from 'react';
import { Button, FlatList, Platform, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { useDispatch } from 'react-redux';
import * as productActions from '../store/actions/products';
import HeaderButton from '../components/UI/HeaderButton';
import ProductItem from '../components/shop/ProductItem';
import colors from '../constants/colors';

const UserProductsScreen = ({ navigation }) => {
  const userProducts = useSelector((state) => state.products.userProducts);
  const dispatch = useDispatch();

  const editProductHandler = (id) => {
    navigation.navigate('EditProduct', { productId: id });
  };

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
              title='Add'
              iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
              onPress={() => {
                navigation.navigate('EditProduct');
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
        onSelect={() => {
          editProductHandler(itemData.item.id);
        }}
      >
        <Button
          color={colors.primary}
          title='Edit'
          onPress={() => {
            editProductHandler(itemData.item.id);
          }}
        />
        <Button
          color={colors.primary}
          title='Delete'
          onPress={() => {
            dispatch(productActions.deleteProduct(itemData.item.id));
          }}
        />
      </ProductItem>
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
