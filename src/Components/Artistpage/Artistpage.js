import React from 'react';
import useSearch from '../Homepage/Functions/ApiFunction'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Artistdetails from './Artistdetails.js'
import Artissongs from './Artistsongs.js'

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: '2',
        height: '900px',
        borderRadius: '3px;',
        backgroundColor: "#87B2E4",
        boxShadow: '0 17px 50px 0 rgba(0,0,0,.19), 0 12px 15px 0 rgba(0,0,0,.10);',
    },
    datapaper: {
        flexDirection: 'column',
        display: 'flex',

        alignItems: 'center',
        zIndex: '3',
        height: '700px',
        borderRadius: '8px;',
        backgroundColor: "white",
        boxShadow: '0 17px 50px 0 rgba(0,0,0,.19), 0 12px 15px 0 rgba(0,0,0,.10);',
    },

    control: {
        padding: theme.spacing(2),
    },
}));



export default function Artistpage() {
    const classes = useStyles();
    const {
        getArtist
    } = useSearch();

    return (
        <div>
            <Paper elevation={3} className={classes.paper}>
                <Grid container className={classes.root} spacing={2}>
                    <Grid item xs={8}>
                        <Artissongs />
                    </Grid>
                    <Grid item xs={4}>
                        <Paper className={classes.datapaper}>
                            <Artistdetails></Artistdetails>
                        </Paper>
                    </Grid>
                </Grid>
            </Paper>
        </div >

    )
}




