import React from 'react';
import { useHistory } from "react-router-dom";
import { useDispatch, useStore } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { setArtist } from '../../Redux/Actions/actions';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function RecentTable() {
  const classes = useStyles();
  const dispatch = useDispatch()
  const store = useStore()
  const history = useHistory();
  const recentList = store.getState().recents
  console.log(recentList);

  const Handleclick = (artist) => {
    console.log(artist);

    dispatch(setArtist(artist));
    history.push(`/ArtistPage/${artist.strArtist}`);
  }

  return (
    <div className={classes.root}>
      {recentList.map(function (listValue) {
        return <Button  variant="outlined" onClick={() => { Handleclick(listValue) }}>{listValue.strArtist}</Button>;
      })}
    </div>
  );
}