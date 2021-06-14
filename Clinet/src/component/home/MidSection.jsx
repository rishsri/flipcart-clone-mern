import React from 'react'
import {imageURL, coronaURL} from "../../constant/data"
import {Box, makeStyles} from "@material-ui/core"


const useStyle = makeStyles({
    wrapper: {
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: 20,
    }
})

const MidSection = () => {
    const classes = useStyle();
    return (
       <>
        <Box className = {classes.wrapper} >
            {
                imageURL.map(image => (
                    <img src= {image} alt = "" style = {{width: "33%"}} />
                ))
            }
        </Box>
        <img src = {coronaURL} alt = "" style = {{width: '100%', marginTop: 20}} />
       </>
    )
}

export default MidSection
