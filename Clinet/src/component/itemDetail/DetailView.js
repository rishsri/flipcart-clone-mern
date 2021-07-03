
import React, {useEffect} from 'react'
import {useSelector, useDispatch} from "react-redux";
import { getProductsDetails } from '../../redux/actions/productActions';

const DetailView = () => {


 const {product} = useSelector(state=> state.getProductsDetails)
    const dispatch = useDispatch();

    useEffect ( () => {
        dispatch(getProductsDetails())
    },[dispatch])

    return (
        <div>
            <p>hello</p>
        </div>
    )
}

export default DetailView
