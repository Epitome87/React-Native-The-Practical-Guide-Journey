import React, { useEffect } from 'react';
import { FlatList, Platform, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import HeaderButton from '../components/UI/HeaderButton';
import OrderItem from '../components/shop/OrderItem';

const OrdersScreen = ({ navigation }) => {
  const orders = useSelector((state) => state.orders.orders);

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
    return (
      <OrderItem
        items={itemData.item.items}
        total={itemData.item.total}
        date={itemData.item.readableDate}
      />
    );
  };

  return (
    <FlatList
      keyExtractor={(item) => item.id}
      data={orders}
      renderItem={renderedItem}
    />
  );
};

const styles = StyleSheet.create({});

export default OrdersScreen;
