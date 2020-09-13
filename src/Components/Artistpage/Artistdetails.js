import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useStore } from 'react-redux';
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        color: "white",
        margin: theme.spacing(3),
    },
    gridList: {
        color: "white",
        margin: theme.spacing(3),
        width: '700px',
        height: 100,
        display: 'flex',
        flexDirection: 'column',
        // alignItems: 'center',
    },
    image: {
        margin: theme.spacing(3),
        width: '700px',
        height: '400px',// fix sizes
    },
}));

export default function Artistdetails() {
    const classes = useStyles();
    const store = useStore()
    const artist = store.getState().artist;
    return (
        <div >
            <Typography variant="h1" className={classes.title}>
                {artist.strArtist}
            </Typography>

            <GridList container justify="center" cellHeight={0} className={classes.gridList} cols={2}>
                <h container justify="center">{artist.strBiographyEN}</h>
            </GridList>
            <img className={classes.image} src={artist.strArtistClearart}></img>
        </div>

    )
}
