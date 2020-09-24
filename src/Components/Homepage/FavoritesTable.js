import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { useDispatch, useStore } from 'react-redux';
import {setArtist} from '../../Redux/Actions/actions';
import { useHistory } from "react-router-dom";



const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));



export default function Favoritestab() {
    const classes = useStyles();
    const dispatch = useDispatch()
    const store = useStore()
    const history = useHistory();


    const favorList = store.getState().favorites
    console.log(favorList);

    const Handleclick = (artist) =>{
        console.log(artist);
    
        dispatch(setArtist(artist));
        history.push(`/ArtistPage/${artist.strArtist}`); 
       }
    

    
    return (
        <div className={classes.root}>
            {favorList.map(function (listValue) {
                if (listValue.strArtist.length < 4) {
                    return <Button color="secondary" variant="outlined" onClick={()=>{Handleclick(listValue)}}>{listValue.strArtist}</Button>;
                }
                else {
                    return <Button color="primary" variant="outlined" onClick={()=>{Handleclick(listValue)}}>{listValue.strArtist}</Button>;
                }
               
            })}
        </div>
    );
}
