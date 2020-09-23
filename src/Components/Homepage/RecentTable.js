import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function OutlinedButtons() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Button variant="outlined">5 seconds of summer</Button>
      <Button variant="outlined">michael jackson</Button>
      <Button variant="outlined">sia</Button>
      <Button variant="outlined">Drake</Button>
      <Button variant="outlined">Omer adam</Button>
      <Button variant="outlined">Default</Button>
      <Button variant="outlined">Default</Button>
      <Button variant="outlined">Default</Button>
      <Button variant="outlined">Default</Button>
      <Button variant="outlined">Default</Button>
      <Button variant="outlined">Default</Button>
      <Button variant="outlined">Default</Button>
      <Button variant="outlined">Default</Button>
    </div>
  );
}
