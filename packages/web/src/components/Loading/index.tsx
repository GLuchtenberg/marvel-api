import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core';

interface Props {
    classes: {
        root: string
    }
}

const styles = {
    root: {
      display: 'flex',
      justifyContent: 'center',
    },
  };

const Loading = ({ classes } : Props) => (
  <div className={classes.root}>
    <CircularProgress />
  </div>
);
export default withStyles(styles)(Loading);
