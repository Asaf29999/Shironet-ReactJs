import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import swal from 'sweetalert';


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
    const [song] = useState(props.song)
    
    const handleclick = () => {
        fetch(`https://orion.apiseeds.com/api/music/lyric/${song.strArtist}/${song.strTrack}\n?apikey=TkIoaPW9oBHoyUUdjq2H4p6aPZKv9XeikU4WqxKZmKXgNsmAp2LhoQ9mhfkvnMPV`)
        .then(response => {
          return response.json();
        })
        .then(result => {
          console.log(result);
          if(result.result != null){
          swal(result.result.track.name, result.result.track.text ? result.result.track.text: "empty" , );
          }else{
            swal(`${result.error} `, "", "error");
            // window.scrollTo({
            //     top: 0,
            //     behavior: "smooth"
            //   });
          }
        })
       
     }




    return (
        <div >
            <Grid
                container
                alignItems="center"
                spacing={2}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Button color="secondary" onClick={handleclick} >{song.strTrack}</Button>
                        <p>{song.strAlbum}</p>
                    </Paper>
                </Grid>

            </Grid>


        </div>

    )
}
export default Singlesong;
