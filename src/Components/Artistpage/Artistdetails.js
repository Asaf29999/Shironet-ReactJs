import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch, useStore } from 'react-redux'
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button';
import SvgIcon from '@material-ui/core/SvgIcon';
import { useHistory } from "react-router-dom";
import { addFavorite } from '../../Redux/Actions/actions';

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
        color: "#87B2E4",
        //margin: theme.spacing(1),
    },
    gridList: {
        color: "#87B2E4",
        width: '100%',
        height: 300,
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
    const dispatch = useDispatch()
    const artist = store.getState().artist;
    const history = useHistory();
    const [fav, setFav] = useState(false);


    function HandleFavorite() {
        setFav(!fav)

        if (!fav) {
            console.log(artist.strArtist);
            dispatch(addFavorite(artist));
        }
        else {
            // remove from store
        }

    }

    function HomeIcon(props) {
        return (
            <SvgIcon {...props}>
                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
            </SvgIcon>
        );
    }
    return (
        <div >
            <Typography variant="h2" className={classes.title}>
                {artist.strArtist}
            </Typography>
            <p>{artist.strStyle}</p>
            <img alt="" className={classes.image} src={artist.strArtistThumb} ></img>

            <GridList container justify="center" cellHeight={0} className={classes.gridList} cols={0}>
                <h container>{artist.strBiographyIL}</h>
            </GridList>
            <Button onClick={HandleFavorite} >{fav ? <FavoriteIcon color="secondary" /> : <FavoriteBorderIcon />}</Button>
            <Button onClick={() => { history.push("/"); }} >{<HomeIcon color="primary" />}</Button>

        </div>

    )
}
