import Grid from "@material-ui/core/Grid";
import Logo from './Logo/index';
import Cart from './Cart/index';
import Languages from './Languages/index';

const Header = (props) => {
  return (
    <Grid container direction="row" justify="space-evenly" alignItems="center" xs={12} >
        
        <Logo />

        <Languages />

        <Cart/>
    </Grid>
  )
};

export default Header;