import IconButton from "@material-ui/core/IconButton";
import { styles } from "./styles";


const Logo = () => {
  const classes = styles();
  return (

    <IconButton >
        <img src={`/images/svg/logo.svg`} alt="" className={classes.logo} />
    </IconButton>

  );
};

export default Logo;