import React, {useEffect} from "react";
import { Box, makeStyles } from "@material-ui/core";

//components
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";
import MidSection from "./MidSection"

 

//import { products } from "../../constant/data"

 import {useSelector, useDispatch} from 'react-redux';
 import {getProducts as listProducts} from "../../redux/actions/productActions"



const useStyles = makeStyles({
  component: {
    padding: 10,
    backgroundColor: "#F2F2F2",
  },
  rightWrapper: {
    background: '#ffffff',
    padding: 5,
    margin: '12px 0 0 10px',
    width: '17%'
  }
});

const Home = () => {
  const classes = useStyles();
  const adURL = 'https://rukminim1.flixcart.com/flap/464/708/image/633789f7def60050.jpg?q=70';

 const {products} =  useSelector(state => state.getProducts)

 const dispatch = useDispatch();
 useEffect(() => {
  dispatch(listProducts())
 },[dispatch])

  return (
    <div>
      <NavBar />
      <Box className={classes.component}>
        <Banner />
        <Box style = {{display: "flex"}}>
          <Box style = {{width: '83%', height: 20}}>
            <Slide timer = {true}  title = "Deal of the Day"  products = {products} />
          </Box>
          <Box className = {classes.rightWrapper}>
            <img src = {adURL} alt = "" style = {{width: 230}} />
          </Box>
        </Box>
        <MidSection/>
        <Slide title = "Discounts for you" timer = {false} products = {products}  />
        <Slide title = "Suggested Items" timer = {false}  products = {products} />
        <Slide title = "Top Selection" timer = {false}  products = {products} />
        <Slide title = "Bestsellers" timer = {false}  products = {products} />
      </Box>
    </div>
  );
};

export default Home;
