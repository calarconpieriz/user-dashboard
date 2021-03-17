import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {},
  name: {
    textTransform: 'capitalize',
  },
  link: {
    color: 'black',
  },
});

export default function CardItem(props: any) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography color="textSecondary" gutterBottom></Typography>
        <Typography variant="h5" component="h2"></Typography>
        <Typography color="textSecondary"></Typography>
        <Typography variant="body2" component="p"></Typography>
      </CardContent>
    </Card>
  );
}
