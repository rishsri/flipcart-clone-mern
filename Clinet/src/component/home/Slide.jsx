import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { makeStyles, Box, Typography } from "@material-ui/core";
import { products } from "../../constant/data";
import Countdown from "react-countdown";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const useStyle = makeStyles({
  component: {
    marginTop: 12,
    backgroundColor: "#ffffff",
  },
  deal: {
    padding: "15px 20px",
    display: "flex",
  },
  dealText: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: '32px',
    marginRight: 25
},
  image: {
    height: 150,
  },
});

const Slide = () => {
  const classes = useStyle();
  const renderer = ({hours, minutes, seconds}) => {
      return <span>{hours}:{minutes}:{seconds} Left </span>
  }
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
  
    return (
    <Box className={classes.component}>

      <Box className={classes.deal}>
        <Typography className = {classes.dealText}>Deal of the day </Typography>
        <img src={timerURL} alt="" style={{ width: 24 }} />
        <Countdown date={Date.now() + 5.04e7} renderer = {renderer} />
      </Box>

      <Carousel
        responsive={responsive}
        infinite={true}
        draggable={false}
        swipeable={false}
        centerMode={true}
        autoplay={true}
        autoPlaySpeed={10000}
        keyBoardControl={true}
        showDots={false}
        removeArrowOnDeviceType={["mobile", "tablet"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
      >
        {products.map((products) => (
          <img src={products.url} className={classes.image} alt = "" />
        ))}
      </Carousel>
    </Box>
  );
};

export default Slide;
