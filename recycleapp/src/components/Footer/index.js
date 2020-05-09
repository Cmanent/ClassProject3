import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
import { Typography, Grid, List, ListItem, ListItemText } from '@material-ui/core';
// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: '#80d8ff',
    },
    typography: {
      padding: theme.spacing(2),
    //   textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    listItem: {
      padding: theme.spacing(0.02),
      color: theme.palette.text.secondary,
    },

  }));

  function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }  

function Footer() {
  const classes = useStyles();    
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item sm={6}>
          <Typography className={classes.typography} variant="h6" color="inherit">
              About Us
          </Typography>
          <Typography className={classes.typography}>
              A group of conscious individuals looking to make it easier for each and every person do their part for a greener planet. Helping our planet can be difficult after all, but it's necessary to keep our home safe and healthy. So we're here to help.
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <Typography className={classes.typography} variant="h6" color="inherit">
              Connect with Us
          </Typography>
          <List>
            <ListItemLink className={classes.listItem} href="#">
              <ListItemText primary="Email" />
            </ListItemLink>
            <ListItemLink className={classes.listItem} href="#">
              <ListItemText primary="Linkedin" />
            </ListItemLink>
            <ListItemLink className={classes.listItem} href="#">
              <ListItemText primary="Instagram" />
            </ListItemLink>   
            <ListItemLink className={classes.listItem} href="#">
              <ListItemText primary="Twitter" />
            </ListItemLink>                     
          </List>
        </Grid>
      </Grid>
      </div>
  );
}

export default Footer;