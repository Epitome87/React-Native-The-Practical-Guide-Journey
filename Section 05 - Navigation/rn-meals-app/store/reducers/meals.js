import { MEALS } from '../../data/dummy-data';
import Meal from '../../models/meal';

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS, // Filter set to include All Meals at start
  favoriteMeals: [
    new Meal(
      'm6',
      ['c6', 'c10'],
      'Delicious Orange Mousse',
      'affordable',
      'hard',
      'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
      240,
      [
        '4 Sheets of Gelatine',
        '150ml Orange Juice',
        '80g Sugar',
        '300g Yoghurt',
        '200g Cream',
        'Orange Peel',
      ],
      [
        'Dissolve gelatine in pot',
        'Add orange juice and sugar',
        'Take pot off the stove',
        'Add 2 tablespoons of yoghurt',
        'Stir gelatin under remaining yoghurt',
        'Cool everything down in the refrigerator',
        'Whip the cream and lift it under die orange mass',
        'Cool down again for at least 4 hours',
        'Serve with orange peel',
      ],
      true,
      false,
      true,
      false
    ),
  ], // No favorites to start
};

const mealsReducer = (state = initialState, action) => {
  return state;
};

export default mealsReducer;
