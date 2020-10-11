import React from 'react';
import { useStore } from 'react-redux';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import Autocomplete from '@material-ui/lab/Autocomplete';

import useSearch from './Functions/ApiFunction'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(3),
  },
}));

const Searchbar = () => {
  const classes = useStyles();
  const {
    getArtistDetails,
    handleChange,
  } = useSearch();
  const store = useStore()
  const top100Films = store.getState().recents;

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12} sm={7}>
        <Autocomplete
          freeSolo
          id="free-solo-2-demo"
          disableClearable
          options={top100Films.map((option) => option.strArtist)}
          renderInput={(params) => (
            <TextField
              {...params}
              onChange={handleChange}
              label="Singer Name"
              margin="normal"
              variant="outlined"
              name="name"
              id="name"
              InputProps={{ ...params.InputProps, type: 'search' }}
            />
          )}
        />
      </Grid >
      <Grid item xs={3} sm={3}>
        <Button
          variant="outlined"
          color="primary"
          className={classes.button}
          onClick={getArtistDetails}
          endIcon={<SearchIcon />}
        >
          Search
      </Button>
      </Grid>
    </Grid>

  );
}
export default Searchbar