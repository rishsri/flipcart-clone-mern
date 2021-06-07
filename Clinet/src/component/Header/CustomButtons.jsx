import React from 'react'
import {Box,Button,makeStyles,Typography} from '@material-ui/core'

const useStyle = makeStyles({
    login: {
        background: "#FFFFFF",
        color:"#2874f0",
        textTransform: 'none',
        fontWeight: 600,
        borderRadius: 2,
        padding: '5px 40px'
    },
    wrapper: {
        margin: '0 5% 0 auto',
        display: 'flex',
        //this is for apply css from parient class to child class
        '& > *' : {
            marginRight: 50
        }
    }
});


const CustomButtons = () => {
    const classes = useStyle();
    return (
        <Box className = {classes.wrapper}>
            <Button variant= "contained" className = {classes.login}>Login</Button>
            <Typography >More</Typography>
            <Box>
                <Typography>Cart</Typography>
            </Box>
        </Box>
    )
}

export default CustomButtons
