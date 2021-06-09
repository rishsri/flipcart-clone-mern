import React from "react";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Typography,
  Box,
  withStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

//components
import SearchBar from "./SearchBar";
import CustomButtons from "./CustomButtons";

const useStyle = makeStyles({
  header: {
    background: "#2874f0",
    height: 55,
  },
  logo: {
    width: 75,
  },
  subURL: {
    width: 10,
    marginLeft: 4,
  },
  container: {
    display: "flex",
  },
  component: {
    marginLeft: "12%",
    lineHeight: 0,
    color: "#FFFFFF",
    textDecoration: "none",
  },
  subHeading: {
    fontSize: 10,
    fontStyle: "italic",
  },
});

const ToolBar = withStyles({
  root: {
    minHeight: 55,
  },
})(Toolbar);

const Header = () => {
  const classes = useStyle();
  const logoURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
  const subURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";
  return (
    <AppBar className={classes.header}>
      <ToolBar>
        <Link to="/" className={classes.component}>
          <img src={logoURL} className={classes.logo} alt="" />
          <Box className={classes.container}>
            <Typography className={classes.subHeading}>
              Explore{" "}
              <Box component="span" style={{ color: "#FFE500" }}>
                Plus
              </Box>
            </Typography>
            <img src={subURL} className={classes.subURL} alt="" />
          </Box>
        </Link>
        <SearchBar />
        <CustomButtons />
      </ToolBar>
    </AppBar>
  );
};

export default Header;
