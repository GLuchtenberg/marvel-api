import React, { useState } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { Hero } from '../../../store/ducks/heros/types';
import HeroModal from './HeroModal';

interface Props {
    hero: Hero,
    classes: {
        card: string,
        media: string
    }
}

const styles = {
    card: {
      maxWidth: 450,
    },
    media: {
      height: 310,
    },
  };

const HeroCard = ({ hero, classes }: Props) => {
    const [open, setOpen] = useState(false);
    function handleClick() {
      setOpen(true);
    }
    function handleClose() {
      setOpen(false);
    }

    return (
      <Card className={classes.card}>
        <CardActionArea onClick={handleClick}>
          <CardMedia
            className={classes.media}
            image={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">{hero.name}</Typography>
          </CardContent>
        </CardActionArea>
        <CardActions onClick={handleClick}>
          <Button size="small" color="primary">Details</Button>
        </CardActions>
        <HeroModal open={open} onClose={handleClose} hero={hero} />
      </Card>
    );
};
export default withStyles(styles)(HeroCard);
