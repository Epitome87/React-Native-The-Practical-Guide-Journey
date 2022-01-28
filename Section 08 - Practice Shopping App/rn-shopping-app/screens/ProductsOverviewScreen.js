import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import DefaultText from '../components/DefaultText';
import ProductItem from '../components/shop/ProductItem';

const ProductsOverviewScreen = () => {
  const products = useSelector((state) => state.products.availableProducts);

  const renderListItem = (item) => {
    return (
      <ProductItem
        title={item.item.title}
        price={item.item.price}
        image={item.item.imageUrl}
        onViewDetail={() => {}}
        onAddToCart={() => {}}
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
