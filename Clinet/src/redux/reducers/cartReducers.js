import * as actionTypes from "../constants/cartConstant";

export const cartReducers = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const items = action.payload;
      const exist = state.cartItems.find((product) => product.id === items.id);
      if (exist) {
        return;
      }
      return { ...state, cartItems: [...state.cartItems, items] };

    default:
      return state;
  }
};
