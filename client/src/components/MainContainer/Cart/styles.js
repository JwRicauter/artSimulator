import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  
    root: {
        flexGrow: 1,
    },

    div: {
        padding: theme.spacing(2),
        display: "flex",
        overflow: "auto",
        flexDirection: "row",
        textAlign: "center",
    },

    button: {
        margin: theme.spacing(1),
    },


    cart: {
        height: 50,
        width: 50,
    },
}));

export { styles };