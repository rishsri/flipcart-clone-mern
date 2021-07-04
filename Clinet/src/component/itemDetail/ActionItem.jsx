import React from 'react'
import {Box,Button, makeStyles} from "@material-ui/core";
import { ShoppingCart as Cart, FlashOn as Flash } from '@material-ui/icons';
import clsx from "clsx"

const useStyles = makeStyles(theme =>({
    leftContainer: {
        minWidth: '40%',
        // textAlign: 'center',
        padding: '40px 0 0 80px',
        [theme.breakpoints.down('md')]: {
            padding: '20px 40px'
        }
    },
    productImage: {
        padding: '15px 20px',
        border: '1px solid #f0f0f0',
        width: '95%'
    },
    button: {
        width: '46%',
        borderRadius: 2,
        height: 50
    },
    addToCart: {
        background: '#ff9f00',
        color: '#FFF'
    },
    buyNow:{
        background: '#fb641b',
        color: '#FFF'
    }
}))

const ActionItem = ({product}) => {
    const classes = useStyles(); 
    return (
        <Box className= {classes.leftContainer}>
            <img src = {product.detailUrl} alt = "" className={classes.productImage}/> <br/>
            <Button className={clsx(classes.button, classes.addToCart)}  style={{marginRight: 10}} variant="contained"><Cart />Add to Cart</Button>
            <Button className={clsx(classes.button, classes.buyNow)} variant="contained"><Flash />Buy Now</Button>
        </Box>
    )
}

export default ActionItem
