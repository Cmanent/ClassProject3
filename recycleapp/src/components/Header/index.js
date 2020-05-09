import React from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import logo from "./recyclelogo.jpg";

const useStyles = makeStyles({
  logo: {  
    maxWidth: 50,
  },
  logoLocation: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  toolbarColor: {
    backgroundColor: "#4caf50",
  }
});

function Header() {
  const classes = useStyles();  

  return (
    <div>
      <AppBar position="static">
        <Toolbar className={classes.toolbarColor}>
          <Typography className={classes.logoLocation}>
            <img src={logo} alt="logo" className={classes.logo} mx='auto'/>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Header;