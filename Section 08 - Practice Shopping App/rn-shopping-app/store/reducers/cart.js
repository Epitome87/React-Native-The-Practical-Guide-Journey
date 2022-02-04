import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart';
import { ADD_ORDER } from '../actions/orders';
import CartItem from '../../models/cart-item';
import { DELETE_PRODUCT } from '../actions/products';

const initialState = {
  items: {},
  total: 0,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const { price, title } = addedProduct;

      let updatedCartItem;

      // If the item already exists, add to its quantity
      if (state.items[addedProduct.id]) {
        updatedCartItem = new CartItem(
          state.items[addedProduct.id].quantity + 1,
          price,
          title,
          state.items[addedProduct.id].total + price
        );
      }

      // Otherwise, add the item to the items array
      else {
        updatedCartItem = new CartItem(1, price, title, price);
      }

      return {
        ...state,
        items: { ...state.items, [addedProduct.id]: updatedCartItem },
        total: state.total + price,
      };
    case REMOVE_FROM_CART:
      const currentQuantity = state.items[action.productId].quantity;
      const selectedCartItem = state.items[action.productId];
      let updatedCartItems = { ...state.items };

      // If we only have 1 quantity of the cart, remove it entirely
      if (currentQuantity === 1) {
        delete updatedCartItems[action.productId];
      } else {
        // Otherwise, just reduce the item's quantity by 1
        const updatedCartItem = new CartItem(
          selectedCartItem.quantity - 1,
          selectedCartItem.price,
          selectedCartItem.title,
          selectedCartItem.total - selectedCartItem.price
        );

        updatedCartItems = {
          ...state.items,
          [action.productId]: updatedCartItem,
        };
      }

      return {
        ...state.items,
        items: updatedCartItems,
        total: state.total - selectedCartItem.price,
      };

    // Clear the cart when we receive this action from our Orders actions
    case ADD_ORDER:
      return initialState;

    case DELETE_PRODUCT:
      if (!state.items[action.productId]) {
        return state;
      }
      const updatedItems = { ...state.items };
      const itemTotal = state.items[action.productId].total;
      delete updatedItems[action.productId];
      return {
        ...state,
        items: updatedItems,
        total: state.total - itemTotal,
      };

    default:
      return state;
  }
};

export default cartReducer;
