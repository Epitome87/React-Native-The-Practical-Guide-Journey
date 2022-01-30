import React from 'react';
import { Platform, StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import DefaultText from '../DefaultText';

const CartItem = ({ quantity, title, amount, onRemove }) => {
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <DefaultText style={styles.quantity}>x{quantity} </DefaultText>
        <DefaultText style={styles.title} bold>
          {title}
        </DefaultText>
      </View>
      <View style={styles.itemData}>
        <DefaultText style={styles.amount} bold>
          ${amount.toFixed(2)}
        </DefaultText>
        <TouchableOpacity style={styles.deleteButton} onPress={onRemove}>
          <Ionicons
            name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
            size={23}
            color='red'
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    marginHorizontal: 20,
    padding: 10,
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  quantity: {
    color: '#888',
    fontSize: 16,
  },
  title: {
    fontSize: 16,
  },
  amount: {
    fontSize: 16,
  },
  deleteButton: {},
});

export default CartItem;
