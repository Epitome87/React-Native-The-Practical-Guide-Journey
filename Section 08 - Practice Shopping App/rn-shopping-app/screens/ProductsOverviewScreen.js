import { FlatList, StyleSheet, View } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import DefaultText from '../components/DefaultText';

const ProductsOverviewScreen = () => {
  const products = useSelector((state) => state.products.availableProducts);
  const renderListItem = (item) => {
    return (
      <View>
        <DefaultText>{item.item.title}</DefaultText>
      </View>
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
