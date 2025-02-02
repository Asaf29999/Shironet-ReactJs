import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useStore } from 'react-redux';
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';
import songsFunction from './Functions/songsFunctions'
import Button from '@material-ui/core/Button';
import Singlesong from './Singlesong'



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: 200,
    width: 800,
    //padding: theme.spacing(10),


  },
  gridList: {
    // color: "black",
    width: '100%',
    height: 1000,
    paddingLeft: 210,
  },
  title: {
    flexGrow: 1,
    color: "white",
    margin: theme.spacing(1),
  },
}));

const Artistsongs = () => {
  const classes = useStyles();
  const store = useStore();

  const artist = store.getState().artist;
  const [songs, setSongs] = useState([]);
  const {
    getAllAlbumsByArtist,
    getAllSongsByArtist
  } = songsFunction(artist.idArtist);

  async function fetchMyAPI() {
    let songs = await getAllSongsByArtist();
    console.log(songs);
    console.log("--------------------------------------------------------------");
    await setSongs(songs)
   // console.log(songs);
    }
  useEffect(() => {
   
    fetchMyAPI()
  }, []);

 console.log(songs);
  return (

    <div className={classes.root} >

      <Typography variant="h1" className={classes.title}>
        Songs
      </Typography>
      <GridList container cellHeight={0} className={classes.gridList} cols={0}>
        <h container>  {songs.map(function (listValue) {
          console.log(songs);
          console.log(listValue);
          return <Singlesong song={listValue} />;
        })}</h>
      </GridList>
    </div>

  )
}
export default Artistsongs;
