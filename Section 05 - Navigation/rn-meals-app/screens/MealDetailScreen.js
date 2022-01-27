import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Image, Platform, StyleSheet, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import DefaultText from '../components/DefaultText';
import HeaderButton from '../components/HeaderButton';
import colors from '../constants/colors';
import { toggleFavorite } from '../store/actions/meals';

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
  // We get this in MealList, which calls navigate to this screen and passes mealId as a route param
  const { mealId } = route.params;

  // Retrieve all meals, then find the one user is currently viewing details for
  const availableMeals = useSelector((state) => state.meals.meals);
  const selectedMeal = availableMeals.find((meal) => meal.id === mealId);

  // Is this meal part of the user's Favorite list?
  const isFavoriteMeal = useSelector((state) =>
    state.meals.favoriteMeals.some((meal) => meal.id === mealId)
  );

  const dispatch = useDispatch();

  // Memo-ize this function to prevent infinite loops
  const handleToggleFavorite = useCallback(() => {
    dispatch(toggleFavorite(mealId));
  }, [dispatch, mealId]);

  // We want this to run whenever isFavoriteMeal changes, so it updates the icon
  // To be thorough, we add navigation and selectedMeal as deps, though they shouldn't change
  useEffect(() => {
    navigation.setOptions({
      title: selectedMeal.title,
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={HeaderButton}>
          <Item
            title='Favorite'
            iconName={isFavoriteMeal ? 'ios-star' : 'ios-star-outline'}
            onPress={handleToggleFavorite}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation, selectedMeal, isFavoriteMeal]);

  // TODO (maybe): Add image of the ingredient to the left of the ingredient name
  const renderedIngredientList = selectedMeal.ingredients.map((ingredient) => {
    return (
      <View key={ingredient} style={styles.listItem}>
        <DefaultText>{ingredient}</DefaultText>
      </View>
    );
  });

  const renderedStepList = selectedMeal.steps.map((step) => {
    return (
      <View key={step} style={styles.listItem}>
        <DefaultText>{step}</DefaultText>
      </View>
    );
  });

  return (
    <ScrollView nestedScrollEnabled={true}>
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
        {renderedIngredientList}

        <DefaultText style={styles.title} bold>
          Steps
        </DefaultText>
        {renderedStepList}
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
