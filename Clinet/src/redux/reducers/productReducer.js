import * as actionType from "../constants/producstConstant";

export const getProductsReducers = (state = {product: [] }, action) => {
  switch (action.type) {
    case actionType.GET_PRODUCT_SUCCESS:
      return { product: action.payload };
    case actionType.GET_PRODUCT_FAIL:
      return { error: action.payload };

    default:
      return state
  }
};
