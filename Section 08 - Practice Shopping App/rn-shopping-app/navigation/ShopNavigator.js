import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import ProductsOverviewScreen from '../screens/ProductsOverviewScreen';
import colors from '../constants/colors';

const Stack = createNativeStackNavigator();

const defaultScreenOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? colors.primary : '',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary,
};

const ProductsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Products Overview'
      screenOptions={{ defaultScreenOptions }}
    >
      <Stack.Screen
        name='Products Overview'
        component={ProductsOverviewScreen}
      />
    </Stack.Navigator>
  );
};

export { ProductsStack };
