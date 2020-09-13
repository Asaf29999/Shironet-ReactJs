import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useStore } from 'react-redux';
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        color: "black",
        //margin: theme.spacing(1),
    },
    gridList: {
        
        color: "black",
        width: '100%',
        height: 100,
    },
    image: {
        margin: theme.spacing(1),
        width: '200px',
        height: '200px',
        alignItems: 'center',
        borderRadius: '4px;',
    },
}));

export default function Artistdetails() {
    const classes = useStyles();
    const store = useStore()
    const artist = store.getState().artist;
    return (
        <div >
            <Typography variant="h2" className={classes.title}>
                {artist.strArtist}
            </Typography> 
           <p>{artist.strStyle}</p>
                
            
            <img className={classes.image} src={artist.strArtistThumb}></img>

            <GridList container justify="center" cellHeight={0} className={classes.gridList} cols={0}>
                <h container>{artist.strBiographyEN}</h>
            </GridList>
        </div>

    )
}
