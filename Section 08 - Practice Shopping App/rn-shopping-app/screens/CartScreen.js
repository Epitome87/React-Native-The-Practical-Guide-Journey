import { Button, FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import DefaultText from '../components/DefaultText';
import { useSelector } from 'react-redux';
import colors from '../constants/colors';

const CartScreen = () => {
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
    return transformedCartItems;
  });
  const cartTotal = useSelector((state) => state.cart.total);

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
        />
      </View>
      <FlatList />
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
