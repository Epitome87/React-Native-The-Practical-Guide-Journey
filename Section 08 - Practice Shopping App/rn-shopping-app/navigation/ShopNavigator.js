import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform } from 'react-native';
import ProductsOverviewScreen from '../screens/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/ProductDetailScreen';
import OrdersScreen from '../screens/OrdersScreen';
import CartScreen from '../screens/CartScreen';
import UserProductsScreen from '../screens/UserProductsScreen';
import colors from '../constants/colors';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

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

const ProductsStack = createNativeStackNavigator();

const ProductsStackNavigator = () => {
  return (
    <ProductsStack.Navigator
      initialRouteName='Products Overview'
      screenOptions={defaultScreenOptions}
    >
      <ProductsStack.Screen
        name='Products Overview'
        component={ProductsOverviewScreen}
        options={{
          title: 'All Products',
        }}
      />
      <ProductsStack.Screen
        name='Product Details'
        component={ProductDetailScreen}
        options={{
          title: 'Product Details',
        }}
      />
      <ProductsStack.Screen
        name='Cart'
        component={CartScreen}
        options={{
          title: 'Your Cart',
        }}
      />
    </ProductsStack.Navigator>
  );
};

const OrdersStack = createNativeStackNavigator();

const OrdersStackNavigator = () => {
  return (
    <OrdersStack.Navigator
      initialRouteName='Orders'
      screenOptions={defaultScreenOptions}
    >
      <OrdersStack.Screen
        name='Orders'
        component={OrdersScreen}
        options={{
          title: 'Your Orders',
        }}
      />
    </OrdersStack.Navigator>
  );
};

const AdminStack = createNativeStackNavigator();

const AdminStackNavigator = () => {
  return (
    <AdminStack.Navigator
      initialRouteName='Admin'
      screenOptions={defaultScreenOptions}
    >
      <AdminStack.Screen
        name='Admin'
        component={UserProductsScreen}
        options={{
          title: 'Your Products',
          drawerIcon: (drawerConfig) => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
              size={23}
              color={drawerConfig.color}
            />
          ),
        }}
      />
    </AdminStack.Navigator>
  );
};

const ShopDrawer = createDrawerNavigator();

const ShopDrawerNavigator = () => {
  return (
    <ShopDrawer.Navigator
      initialRoute='Products'
      screenOptions={{
        ...defaultScreenOptions,
        headerShown: false,
        drawerActiveTintColor: colors.primary,
      }}
    >
      <ShopDrawer.Screen
        name='Products'
        component={ProductsStackNavigator}
        options={{
          title: 'Products Stack',
          drawerIcon: (drawerConfig) => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
              size={23}
              color={drawerConfig.color}
            />
          ),
        }}
      />
      <ShopDrawer.Screen
        name='Orders'
        component={OrdersStackNavigator}
        options={{
          title: 'Orders Stack',
          drawerIcon: (drawerConfig) => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
              size={23}
              color={drawerConfig.color}
            />
          ),
        }}
      />
      <ShopDrawer.Screen
        name='Admin Stack'
        component={AdminStackNavigator}
        options={{
          title: 'Admin Stack',
          drawerIcon: (drawerConfig) => (
            <Ionicons
              name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
              size={23}
              color={drawerConfig.color}
            />
          ),
        }}
      />
    </ShopDrawer.Navigator>
  );
};

export { ProductsStackNavigator, OrdersStackNavigator, ShopDrawerNavigator };
