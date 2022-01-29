export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

export const addItem = (product) => {
  return { type: ADD_TO_CART, product: product };
};

export const removeItem = (product) => {
  return { type: REMOVE_FROM_CART, product: product };
};
