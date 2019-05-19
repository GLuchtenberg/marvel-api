import React from 'react';
import { Paper, Grid, withStyles } from '@material-ui/core';
import { Hero } from '../../store/ducks/heros/types';
import HeroCard from './components/HeroCard';

interface Props {
  heros: Hero[],
  classes: any,
}
const styles = {
    root: {
      flexGrow: 1,
    },

  };

const HeroList = ({ heros, classes }:Props) => (
  <div className={classes.root}>
    <Grid container spacing={24}>
      {
            heros.map(hero => (
              <Grid item xs={4} key={hero.id}>
                <HeroCard hero={hero} />
              </Grid>
            ))
        }
    </Grid>
  </div>
  );


export default withStyles(styles)(HeroList);
