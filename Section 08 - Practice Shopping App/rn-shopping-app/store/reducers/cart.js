import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart';
import CartItem from '../../models/cart-item';

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
      // If the item already exists, decrement its quantity

      // Otherwise, remove the item from the items array
      return state;
    default:
      return state;
  }
};

export default cartReducer;
