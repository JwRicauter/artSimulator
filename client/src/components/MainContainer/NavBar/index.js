import React from "react";
import { Button, Grid, Hidden, IconButton } from "@material-ui/core";
import { HashRouter as Router } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
import Title from "../Title";
import { useStyles } from "./style";
import BarIcon from "./barIcon"


// Link the Material-ui component to react-router
const LinkBehavior = React.forwardRef((props, ref) => (
  <RouterLink ref={ref} to="/" {...props} />
));


// Navegation Bar component
const NavBar = () => {
  const classes = useStyles();

  const tabs = () => {
      return(
        <>
            <Grid key='ArtWall' item>
                <Button size="small" variant="outlined" component={LinkBehavior} to='/' className={classes.borderRedTop}>
                    Construye tu Propia Pared de Arte
                </Button>
            </Grid>
            <Grid key='Conoceme' item>
                <Button size="small" variant="outlined" component={LinkBehavior} to='/' className={classes.borderGreenDown}>
                    Conóceme
                </Button>
            </Grid>
            <Grid key='Contacto' item>
                <Button size="small" variant="outlined" component={LinkBehavior} to='/' className={classes.borderLightGreenTop}>
                    Contacto
                </Button>
            </Grid>
            <Grid key='Pedidos' item>
                <Button size="small" variant="outlined" component={LinkBehavior} to='/' className={classes.borderRedDown}>
                    Pedidos a medida
                </Button>
            </Grid>
        </>
      )
  }
  return (
    <Grid item container spacing={1} direction="row" justify="space-evenly" alignItems="center">
      <Router>

        {/* Buttons only visible in large and mediums screens*/}
        <Hidden mdDown>
            {this.tabs()}
        </Hidden>

        {/* Buttons only visible in smalls screens */}
        <Hidden lgUp>
          <BarIcon navbar={this.tabs()}>
            <Grid container direction="row" alignItems="center" justify="space-between">
              {[
                [<IconButtonHelper cart={cart} svg={svg[0]} cls={classes.carrito} />, 2],
                [<Title svg={titleSvg} />, 6],
                [<IconButtonHelper handleClick={() => handleClick()} svg={svg[1]} cls={classes.carrito} />, 2],
              ].map((g, i) => {
                return (
                  <Grid key={i} item xs={g[1]}>
                    {g[0]}
                  </Grid>
                );
              })}
            </Grid>
          </BarIcon>
        </Hidden>
      </Router>
    </Grid>
  );
};

export default NavBar;