import React from "react";
import Carousel from "react-material-ui-carousel";
import { bannerData } from "../../constant/data";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  image: {
    width: "100%",
    height: 280,
  },
});

const Banner = () => {
  const classes = useStyles();
  return (
    <div>
      <Carousel
        autoplay={true}
        animation="slide"
        indicators={false}
        navButtonsAlwaysVisible={true}
        cycleNavigation={true}
        navButtonsProps = {{
            style:{
                background: '#FFFFFF',
                color: '#494949',
                borderRadius: 3,
                margin:0,
                width: 50,
                height: 100,
                marginTop:-30,
                boxShadow: "0 1px 5px 0 rgb(0 0 0 / 11%)",
                transitions: "opacity .1s ease-in"
            }
        }}
      >
        {bannerData.map((image) => (
          <img src={image} alt="" className={classes.image} />
        ))}
      </Carousel>
    </div>
  );
};

export default Banner;
