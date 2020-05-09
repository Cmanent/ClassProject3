import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardActionArea, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  cardStyle: {
    margin: '20px',
  }
}));

function LearnMoreCard() {
  const classes = useStyles();

  return (
    <Card className={classes.cardStyle}>
      <CardContent>
        <Typography variant="h6">
         Learn More
        </Typography>
      </CardContent>
      <CardActionArea>
        <div
          className="video"
          style={{
            position: "relative",
            paddingBottom: "56.25%" /* 16:9 */,
            paddingTop: 25,
            height: 0
          }}
        >
          <iframe
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%"
            }}
            src={`https://www.youtube.com/embed/OasbYWF4_S8`}
            frameBorder="0"
          />
        </div>
      </CardActionArea>             
    </Card>
  );
}

export default LearnMoreCard;

