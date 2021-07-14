
import axios from 'axios';
import * as action from "../constants/cartConstant";

const url = 'http://localhost:8000';

export const cartActions = (id) => async(dispatch) => {
     try{
        const {data} = await axios.get(`${url}/product/${id}`)
        dispatch({type: action.ADD_TO_CART, payload: data})
     }catch(error){
        console.log("Error while calling an API")
     }
}

