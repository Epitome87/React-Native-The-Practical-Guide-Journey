import React, { useLayoutEffect } from 'react';
import { useSelector } from 'react-redux';
import { FlatList, Image, Platform, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import DefaultText from '../components/DefaultText';
import HeaderButton from '../components/HeaderButton';
import colors from '../constants/colors';

const lowColor = 'green';
const mediumColor = 'orange';
const highColor = 'red';

const durationColor = (duration) => {
  if (duration < 15) return lowColor;
  if (duration < 30) return mediumColor;
  return highColor;
};

const affordabilityColor = (affordability) => {
  switch (affordability) {
    case 'affordable':
      return lowColor;
    case 'pricey':
      return mediumColor;
    case 'luxurious':
      return highColor;
    default:
      return 'white';
  }
};

const complexityColor = (complexity) => {
  switch (complexity) {
    case 'simple':
      return lowColor;
    case 'hard':
      return mediumColor;
    case 'challenging':
      return highColor;
    default:
      return 'white';
  }
};

const MealDetailScreen = ({ navigation, route }) => {
  const { mealId } = route.params;

  const availableMeals = useSelector((state) => state.meals.meals);
  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      // headerRight: () => (
      //   <Button onPress={() => alert('This is a button!')} title='FAV' />
      // ),
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title='Favorite'
            iconName='ios-star'
            onPress={() => alert('Marked as favorite!')}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  // TODO (maybe): Add image of the ingredient to the left of the ingredient name
  const renderedIngredient = (itemData) => {
    return (
      <View style={styles.listItem}>
        <DefaultText>{itemData.item}</DefaultText>
      </View>
    );
  };

  // TODO: Can remove this and use the above, as its rendering logic is the same
  // Do this if we decide the two renders don't have their own unique styling
  const renderedStep = (itemData) => {
    return (
      <View style={[styles.listItem]}>
        <DefaultText>{itemData.item}</DefaultText>
      </View>
    );
  };

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
      <View style={[styles.details]}>
        <DefaultText
          style={{
            backgroundColor: durationColor(selectedMeal.duration),
            borderRadius: 5,
            padding: 5,
          }}
        >
          {selectedMeal.duration}m
        </DefaultText>
        <DefaultText
          style={{
            backgroundColor: complexityColor(selectedMeal.complexity),
            borderRadius: 5,
            padding: 5,
          }}
        >
          {selectedMeal.complexity.toUpperCase()}
        </DefaultText>
        <DefaultText
          style={{
            backgroundColor: affordabilityColor(selectedMeal.affordability),
            borderRadius: 5,
            padding: 5,
          }}
        >
          {selectedMeal.affordability.toUpperCase()}
        </DefaultText>
      </View>
      <View style={styles.screen}>
        <DefaultText style={styles.title} bold>
          Ingredients
        </DefaultText>
        <FlatList
          scrollEnabled={false}
          keyExtractor={(item, index) => item.ingredient}
          data={selectedMeal.ingredients}
          renderItem={renderedIngredient}
          style={styles.ingredients}
        />
        <DefaultText style={styles.title} bold>
          Steps
        </DefaultText>
        <FlatList
          scrollEnabled={false}
          keyExtractor={(item, index) => item.step}
          data={selectedMeal.steps}
          renderItem={renderedStep}
          style={styles.steps}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  details: {
    flexDirection: 'row',
    padding: 15,
    justifyContent: 'space-around',
  },
  title: {
    fontSize: 22,
    textAlign: 'center',
  },
  listItem: {
    marginVertical: 10,
    marginHorizontal: 20,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    backgroundColor: colors.primaryColorLight,
    shadowcolor: 'black',
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    // We need a hidden overflow on Android to fix minor visual annoyance with its onPress ripple effect
    overflow:
      Platform.OS === 'android' && Platform.Version > 21 ? 'hidden' : 'visible',
    elevation: 3,
  },
});

export default MealDetailScreen;
