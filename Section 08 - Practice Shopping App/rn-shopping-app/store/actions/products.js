export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const DELETE_PRODUCT = 'DELETE_PRODUCT';

export const createProduct = (productId) => {
  return { type: CREATE_PRODUCT, productId: productId };
};
export const deleteProduct = (productId) => {
  return { type: CREATE_PRODUCT, productId: productId };
};
