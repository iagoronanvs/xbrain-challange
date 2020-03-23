import React from 'react';
import { Typography, Divider, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  spacing: {
    marginTop: 30,
    marginBottom: 20
  }
});

const Title = ({ text }) => {
  const classes = useStyles();
  return (
    <div className={classes.spacing}>
      <Typography className="Title" component="h6" variant="h6" gutterBottom>
        <b>{text}</b>
      </Typography>
      <Divider />
    </div>
  );
};

export default Title;
