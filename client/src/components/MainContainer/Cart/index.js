import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import { styles } from "./styles";


const Cart = () => {
  const classes = styles();
  
  return (
    
    <IconButton id="checkout-button" role="link">
        <img src={'/images/svg/CartIcon.svg'} alt="" className={classes.cart} />
    </IconButton>

  );
};

export default Cart;