import React from "react";
import { Box, makeStyles } from "@material-ui/core";

//components
import NavBar from "./NavBar";
import Banner from "./Banner";
import Slide from "./Slide";

const useStyles = makeStyles({
  component: {
    padding: 10,
    backgroundColor: "#F2F2F2",
  },
});

const Home = () => {
  const classes = useStyles();
  return (
    <div>
      <NavBar />
      <Box className={classes.component}>
        <Banner />
        <Slide />
      </Box>
    </div>
  );
};

export default Home;
