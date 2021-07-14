import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk"
import { composeWithDevTools } from "redux-devtools-extension";
import {getProductsReducers, getProductsDetailsReducers} from "./reducers/productReducer";
import {cartReducers} from "./reducers/cartReducers";




const reducer = combineReducers({
    getProducts: getProductsReducers,
    getProductsDetails: getProductsDetailsReducers,
    cart: cartReducers
})

const middleware  = [thunk];

const store  = createStore(
    reducer, 
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;