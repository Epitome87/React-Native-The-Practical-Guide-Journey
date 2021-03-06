import PRODUCTS from '../../data/dummy-data';
import { DELETE_PRODUCT } from '../actions/products';

const initialState = {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((product) => product.ownerId === 'u1'),
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_PRODUCT:
      return {
        ...state,
        userProducts: state.userProducts.filter(
          (product) => product.id !== action.productId
        ),
        availableProducts: state.availableProducts.filter(
          (product) => product.id !== action.productId
        ),
      };
    default:
      return state;
  }
};

export default productsReducer;
