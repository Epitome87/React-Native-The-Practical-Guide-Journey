import { Button, Image, StyleSheet, View } from 'react-native';
import React from 'react';
import DefaultText from '../DefaultText';
import colors from '../../constants/colors';

const ProductItem = ({ title, price, image, onViewDetail, onAddToCart }) => {
  return (
    <View style={styles.product}>
      <Image style={styles.image} source={{ uri: image }} />
      <View style={styles.details}>
        <DefaultText style={styles.title}>{title}</DefaultText>
        <DefaultText style={styles.price}>${price.toFixed(2)}</DefaultText>
      </View>

      <View style={styles.buttonsContainer}>
        <Button
          color={colors.primary}
          title='View Details'
          onPress={onViewDetail}
        />
        <Button color={colors.primary} title='To Cart' onPress={onAddToCart} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  product: {
    shadowColor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
    height: 300,
    margin: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '60%',
  },
  details: {
    alignItems: 'center',
    height: '15%',
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    paddingHorizontal: 25,
  },
});

export default ProductItem;
