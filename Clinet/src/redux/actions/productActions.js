import axios from 'axios';
import * as action from "../constants/producstConstant";

const url = 'http://localhost:8000';


export const getProducts = () => async(dispatch) => {
    try {
        const {data} =  await axios.get(`${url}/products`);
        dispatch({type: action.GET_PRODUCT_SUCCESS, payload: data})
    }catch(error){
        dispatch({type: action.GET_PRODUCT_FAIL, payload: error.response})
    }
}