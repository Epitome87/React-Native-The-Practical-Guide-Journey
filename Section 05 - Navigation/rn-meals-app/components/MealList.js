import { FlatList, View, StyleSheet } from 'react-native';
import React from 'react';
import MealItem from './MealItem';

const MealList = ({ navigation, listData }) => {
  const renderedMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.item.title}
        duration={itemData.item.duration}
        complexity={itemData.item.complexity}
        affordability={itemData.item.affordability}
        image={itemData.item.imageUrl}
        onSelectMeal={() => {
          navigation.navigate('MealDetail', { mealId: itemData.item.id });
        }}
      />
    );
  };

  return (
    <View style={[styles.list]}>
      <FlatList
        data={listData}
        keyExtractor={(item, index) => item.id}
        renderItem={renderedMealItem}
        style={{ width: '100%' }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MealList;
