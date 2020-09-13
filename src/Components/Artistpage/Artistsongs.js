import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useStore } from 'react-redux';
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';
import songsFunction from './Functions/songsFunctions'

const useStyles = makeStyles((theme) => ({
   
}));

export default function Artistsongs() {
    const classes = useStyles();
    const store = useStore();
    const artist = store.getState().artist;
    
    const {
        getAllAlbumsByArtist,
      } = songsFunction(artist.strArtist);

     const albums = getAllAlbumsByArtist();
    console.log(albums)
     return (
        <div >
         songs
        </div>

    )
}
