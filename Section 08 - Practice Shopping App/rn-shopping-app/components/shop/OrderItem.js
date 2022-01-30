import React from 'react';
import { Button, StyleSheet, View } from 'react-native';
import DefaultText from '../DefaultText';
import CartItem from './CartItem';
import colors from '../../constants/colors';

const OrderItem = ({ total, date }) => {
  return (
    <View style={styles.orderItem}>
      <View style={styles.summary}>
        <DefaultText bold style={styles.total}>
          ${total.toFixed(2)}
        </DefaultText>
        <DefaultText style={styles.date}>{date}</DefaultText>
      </View>
      <Button title='Show Details' color={colors.primary} />
    </View>
  );
};

const styles = StyleSheet.create({
  orderItem: {
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    margin: 20,
    padding: 10,
    overflow: 'hidden',
    alignItems: 'center',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 15,
  },
  total: {
    fontSize: 16,
  },
  date: {
    fontSize: 16,
    color: '#888',
  },
});

export default OrderItem;
