import { Button, Image, ScrollView, StyleSheet, View } from 'react-native';
import React, { useEffect } from 'react';
import DefaultText from '../components/DefaultText';
import { useSelector } from 'react-redux';
import colors from '../constants/colors';

const ProductDetailScreen = ({ navigation, route }) => {
  useEffect(() => {
    navigation.setOptions({
      title: route.params.title,
    });
  }, [navigation]);

  const productId = route.params.productId;

  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((product) => product.id === productId)
  );

  return (
    <ScrollView>
      <Image style={styles.image} source={{ uri: selectedProduct.imageUrl }} />
      <View style={styles.buttonContainer}>
        <Button
          title='Add to Cart'
          bold
          color={colors.primary}
          onPress={() => {}}
        />
      </View>
      <DefaultText style={styles.price}>
        $
        {selectedProduct
          ? selectedProduct.price.toFixed(2)
          : 'No price available'}
      </DefaultText>
      <DefaultText style={styles.description}>
        {selectedProduct
          ? selectedProduct.description
          : 'No description available'}
      </DefaultText>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  buttonContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default ProductDetailScreen;
