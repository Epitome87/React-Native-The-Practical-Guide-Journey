import { Button, FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import DefaultText from '../components/DefaultText';
import { useDispatch, useSelector } from 'react-redux';
import colors from '../constants/colors';
import CartItem from '../components/shop/CartItem';
import * as cartActions from '../store/actions/cart';
import * as ordersActions from '../store/actions/orders';

const CartScreen = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => {
    const transformedCartItems = [];
    for (let key in state.cart.items) {
      transformedCartItems.push({
        productId: key,
        title: state.cart.items[key].title,
        price: state.cart.items[key].price,
        quantity: state.cart.items[key].quantity,
        total: state.cart.items[key].total,
      });
    }
    return transformedCartItems.sort((a, b) =>
      a.productId > b.productId ? 1 : -1
    );
  });

  const cartTotal = useSelector((state) => state.cart.total);

  const renderedCartItem = (itemData) => {
    return (
      <CartItem
        deletable={true}
        quantity={itemData.item.quantity}
        title={itemData.item.title}
        amount={itemData.item.total}
        onRemove={() => {
          dispatch(cartActions.removeItem(itemData.item.productId));
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <View style={styles.summary}>
        <DefaultText style={styles.summaryText} bold>
          Total:{' '}
          <DefaultText style={styles.amount}>
            ${cartTotal.toFixed(2)}
          </DefaultText>
        </DefaultText>
        <Button
          title='Order Now'
          color={colors.accent}
          disabled={cartItems.length === 0}
          onPress={() => {
            dispatch(ordersActions.addOrder(cartItems, cartTotal));
          }}
        />
      </View>
      <FlatList
        keyExtractor={(item) => item.productId}
        data={cartItems}
        renderItem={renderedCartItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    margin: 20,
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  summaryText: {
    fontSize: 18,
  },
  amount: {
    color: colors.primary,
  },
});

export default CartScreen;
