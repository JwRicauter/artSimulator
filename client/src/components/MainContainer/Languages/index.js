import React from "react";
import { Grid, IconButton } from "@material-ui/core";
import { styles } from "./styles";


const Languages = () => {
  const classes = styles();
  
  return (
    <Grid containernjustify="center" direction="row" alignItems="center" spacing={1}>
        
        <IconButton id="checkout-button" role="link">
            <img src={'/images/svg/SpanishIcon.svg'} alt="" className={classes.languageIcon} />
        </IconButton>

        <IconButton id="checkout-button" role="link">
            <img src={'/images/svg/EnglishIcon.svg'} alt="" className={classes.languageIcon} />
        </IconButton>

    </Grid>
  );
};

export default Languages;