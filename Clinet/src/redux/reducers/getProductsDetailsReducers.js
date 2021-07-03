import * as actionType from "../constants/productConstant";


export const getProductsDetailsReducers = (state = {product: {}}, action) => {
    switch (action.type) {
        case actionType.GET_PRODUCT_DETAIL_SUCCESS:
            return {product: action.payload}
        case actionType.GET_PRODUCT_DETAIL_FAIL:
            return{product: action.payload}
    
        default:
            return state;
    }
}