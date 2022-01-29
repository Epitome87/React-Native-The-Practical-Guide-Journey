import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import ProductsOverviewScreen from '../screens/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import CartScreen from '../screens/CartScreen';
import colors from '../constants/colors';

const Stack = createNativeStackNavigator();

const defaultScreenOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? colors.primary : '',
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold',
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans',
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : colors.primary,
};

const ProductsStack = () => {
  return (
    <Stack.Navigator
      initialRouteName='Products Overview'
      screenOptions={defaultScreenOptions}
    >
      <Stack.Screen
        name='Products Overview'
        component={ProductsOverviewScreen}
        options={{
          title: 'All Products',
        }}
      />
      <Stack.Screen
        name='Product Details'
        component={ProductDetailScreen}
        options={{
          title: 'Product Details',
        }}
      />
      <Stack.Screen
        name='Cart'
        component={CartScreen}
        options={{
          title: 'Your Cart',
        }}
      />
    </Stack.Navigator>
  );
};

export { ProductsStack };
