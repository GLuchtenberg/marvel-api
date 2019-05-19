import React from 'react';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import { Paper, Grid } from '@material-ui/core';
import { Hero } from '../../../store/ducks/heros/types';

interface Props {
    open:boolean,
    hero: Hero,
    onClose() :void,
}


const HeroModal = ({
 open, hero, onClose: handleClose,
} : Props) => (
  <Modal
    aria-labelledby="simple-modal-title"
    aria-describedby="simple-modal-description"
    open={open}
    onClose={handleClose}
  >
    <Paper>
      <Grid container spacing={16}>
        <Grid><img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt={hero.name} /></Grid>

        <Grid>
          <Typography variant="h6">{hero.name}</Typography>
          <Typography variant="subtitle1">{hero.description}</Typography>
          <dl>
            <dt>Nº quadrinhos presente:</dt>
            <dd>{hero.comics.available}</dd>
            <dt>Nº histórias presente:</dt>
            <dd>{hero.stories.available}</dd>
            <dt>Nº séries presente:</dt>
            <dd>{hero.series.available}</dd>
          </dl>
        </Grid>
      </Grid>
    </Paper>

  </Modal>
);
export default HeroModal;
