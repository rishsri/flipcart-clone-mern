
import React, {useEffect} from 'react'
import {Box, makeStyles} from "@material-ui/core";
import {useSelector, useDispatch} from "react-redux";
import { getProductsDetails } from '../../redux/actions/productActions';

const DetailView = ({match}) => {


 const { product } = useSelector(state => state.getProductsDetails)
    const dispatch = useDispatch();

    console.log(product)

    useEffect (() => {
        dispatch(getProductsDetails(match.params.id))
    }, [dispatch])

    return (
        <Box>
            <Box>

            </Box>
            <Box>

            </Box>
        </Box>
    )
}

export default DetailView
