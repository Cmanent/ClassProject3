import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import RecycleInfoCard from './RecycleInfoCard';
import RecycleLocationCard from './RecycleLocationCard';
import MessageBoard from './MessageBoard';
import RecycleProjectsCard from './RecycleProjectsCard';
import LearnMoreCard from './LearnMoreCard';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      marginBottom: '40px',
      marginTop: '40px',
      marginLeft: '20px',
      marginRight: '20px',
    },
}));

function Content() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item md={4}>
          <RecycleInfoCard/>
        </Grid>
        <Grid item md={4}>
          <RecycleLocationCard/>
        </Grid>
        <Grid item md={4}>
         <MessageBoard/>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item md={6}>
          <RecycleProjectsCard/>
        </Grid>
        <Grid item md={6}>
          <LearnMoreCard/>
        </Grid>
      </Grid>              
    </div>
  );
}

export default Content;