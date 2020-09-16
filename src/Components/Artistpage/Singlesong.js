import React, { useEffect, useState } from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useStore } from 'react-redux';
import GridList from '@material-ui/core/GridList';
import Grid from '@material-ui/core/Grid';
import songsFunction from './Functions/songsFunctions'
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';




const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(5),
        // height: 10,
        // width: 600,
        textAlign: 'center',
        color: theme.palette.text.secondary,
        boxShadow: '0 17px 50px 0 rgba(0,0,0,.19), 0 12px 15px 0 rgba(0,0,0,.10);',
        borderRadius: '3px;',

    },
}));

const Singlesong = props => {
    const classes = useStyles();
    const [song] = useState(props.name)
    const handleclick = () => { }




    return (
        <div >

            <Grid
                container
                alignItems="center"
                spacing={2}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Button color="secondary" onClick={handleclick} >{song}</Button>
                        <p>{song}</p>
                    </Paper>
                </Grid>

            </Grid>


        </div>

    )
}
export default Singlesong;
