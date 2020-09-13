import React from 'react';
import Appbar from './Appbar'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        zIndex: '2',
        height : '450px',
        borderRadius: '3px;',
        backgroundColor:"#87B2E4",
        boxShadow: '0 17px 50px 0 rgba(0,0,0,.19), 0 12px 15px 0 rgba(0,0,0,.10);',
        
      },
    control: {
        padding: theme.spacing(2),
    },
}));



export default function Homepage() {
    const classes = useStyles();
    
    return (
        <div>
             <Paper elevation={3} className={classes.paper}>
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <Appbar/>
                    </Grid>
                </Grid>
            </Grid>
            </Paper>
           
        </div>

    )
    }
