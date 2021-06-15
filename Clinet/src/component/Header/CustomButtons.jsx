import { useState } from "react";
import { Box, Button, makeStyles, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { Link } from "react-router-dom";

//Component
import LoginDialog from "../login/loginDialog";

const useStyle = makeStyles({
  login: {
    background: "#FFFFFF",
    color: "#2874f0",
    textTransform: "none",
    fontWeight: 600,
    borderRadius: 2,
    padding: "5px 40px",
    boxShadow: "none",
  },
  wrapper: {
    margin: "0 7% 0 auto",
    display: "flex",
    //this is for apply css from parient class to child class
    "& > *": {
      marginRight: 50,
      alignItems: "center",
      textDecoration: "none",
      color: "#FFFFFF",
    },
  },

  container: {
    display: "flex",
  },
});

const CustomButtons = () => {
  const classes = useStyle();
  const [open, setOpen] = useState(false);

  const openDialog = () => {
    setOpen(true);
  };

  return (
    <Box className={classes.wrapper}>
      <Link>
        <Button
          className={classes.login}
          variant="contained"
          onClick={() => openDialog()}
        >
          Login
        </Button>
      </Link>
      <Link>
        <Typography style={{ marginTop: 5 }}>More</Typography>
      </Link>
      <Link to="/cart" className={classes.container}>
        <Badge badgeContent={4} color="secondary">
          <ShoppingCartIcon />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </Link>
      <LoginDialog open={open} setOpen={setOpen}  />
    </Box>
  );
};

export default CustomButtons;
