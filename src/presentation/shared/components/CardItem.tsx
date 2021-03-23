import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    position: 'relative',
    minWidth: '300px',
    minHeight: '265px',
    margin: '0 10px',
  },
  name: {
    textTransform: 'capitalize',
  },
  link: {
    color: 'black',
  },
});

const CardItem = ({ children }: any) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};

CardItem.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardItem;
