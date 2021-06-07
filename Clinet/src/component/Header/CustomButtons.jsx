import React from 'react'
import {Box,Button,makeStyles,Typography} from '@material-ui/core'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';

const useStyle = makeStyles({
    login: {
        background: "#FFFFFF",
        color:"#2874f0",
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px',
        boxShadow: 'none'
    },
    wrapper: {
        margin: '0 7% 0 auto',
        display: 'flex',
        //this is for apply css from parient class to child class
        '& > *' : {
            marginRight: 50,
            alignItems: 'center'
        }
    },

    container: {
        display: 'flex'
    }
});


const CustomButtons = () => {
    const classes = useStyle();
    return (
        <Box className = {classes.wrapper}>
            <Button variant= "contained" className = {classes.login}>Login</Button>
            <Typography style={{marginTop: 5}} >More</Typography>
            <Box className = {classes.container}>
            <Badge badgeContent={4} color="secondary">
            <ShoppingCartIcon/>
      </Badge>
                 <Typography style = {{marginLeft: 10}}>Cart</Typography>
            </Box>
        </Box>
    )
}

export default CustomButtons
