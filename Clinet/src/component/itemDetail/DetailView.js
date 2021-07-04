import React, { useEffect } from "react";
import {
  Box,
  makeStyles,
  CircularProgress,
  Button,
  Grid,
  Typography,
} from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getProductsDetails } from "../../redux/actions/productActions";
import clsx from "clsx";
import ProductDetail from "./ProductDetail"
import ActionItem from "./ActionItem";

const useStyles = makeStyles((theme) => ({
  component: {
    marginTop: 55,
    background: "#F2F2F2",
  },
  container: {
    background: "#FFFFFF",
    // margin: '0 80px',
    display: "flex",
    [theme.breakpoints.down("md")]: {
      margin: 0,
    },
  },
  rightContainer: {
    marginTop: 50,
    "& > *": {
      marginTop: 10,
    },
  },
  price: {
    fontSize: 28,
  },
  smallText: {
    fontSize: 14,
  },
  greyTextColor: {
    color: "#878787",
  },
}));

const DetailView = ({ match }) => {
  const classes = useStyles();

  const { product } = useSelector((state) => state.getProductsDetails);
  const dispatch = useDispatch();

  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  useEffect(() => {
    dispatch(getProductsDetails(match.params.id));
  }, [dispatch]);

  return (
    <Box className={classes.component}>
      {}
      {product && Object.keys(product).length && (
        <Box className={classes.container}>
          <Box style={{ minWidth: "40%" }}>
            <ActionItem product = {product}/>
          </Box>
          <Box className={classes.rightContainer}>
            <Typography>{product.title.longTitle}</Typography>
            <Typography
              className={clsx(classes.smallText, classes.greyTextColor)}
            >
              8 Ratings & 1 Review
              <span>
                <img
                  src={fassured}
                  alt=""
                  style={{ width: 77, marginLeft: 20 }}
                />
              </span>
            </Typography>
            <Typography>
              <span className={classes.price}>₹{product.price.cost}</span>
              &nbsp;&nbsp;&nbsp;
              <span className={classes.greyTextColor}>
                <strike>₹{product.price.mrp}</strike>
              </span>
              &nbsp;&nbsp;&nbsp;
              <span style={{ color: "#388E3C" }}>
                {product.price.discount} off
              </span>
            </Typography>
            <ProductDetail product = {product} />
            
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default DetailView;
