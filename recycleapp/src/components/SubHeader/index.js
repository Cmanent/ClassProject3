import React from "react";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  title: {
    flexGrow: 1,
    textAlign: 'center',
    color: "#81c784",
    paddingBottom: '8px',
  },
  titleBox: {
    borderColor: '#4caf50',
  },
  textContent: {
    textAlign: 'center',
  },
});

function SubHeader() {
  const classes = useStyles();  

  return (
    <Box mt={8}>
      <Box component="div" pt={2} pb={2} border={3} mx={30} className={classes.titleBox}>
        <Typography variant="h3" className={classes.title} >
          Be Green         
        </Typography>
      </Box>
      <Box component="div" pt={2} pb={8}>
        <Typography variant="h6" className={classes.textContent}>
          Change your habits. Change the world.
        </Typography>
      </Box>
    </Box>
  );
}

export default SubHeader;