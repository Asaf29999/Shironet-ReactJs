import swal from 'sweetalert';
import {useCallback } from 'react';
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch, useStore} from 'react-redux'
import {setArtist} from '../../../Redux/Actions/actions';


const useSearch = () => {
 
    const history = useHistory();
    const [values, setValues] = useState({});
    const dispatch = useDispatch()
    const store = useStore()


    // useEffect(() => {
    //   console.log(artist);
    // }, [artist]);

    const getAllAlbumsByArtist = (name) => {

    }

    const getArtistDetails = () => {

      fetch(`https://www.theaudiodb.com/api/v1/json/1/search.php?s=${values.name}`)
        .then(response => {
          return response.json()
        })
        .then(result => {
          if (result.artists == null) {
            throw new Error('cant find singer');
          }
          else {
            console.log(result);
            const artist = result.artists[0];
            dispatch(setArtist(artist));
            console.log(artist);
            console.log(store.getState());

            // console.log(artist);
            history.push(`/ArtistPage/${values.name}`);
          }
        })
        .catch(error => {
          swal("Cant find this Singer ", "", "error");
          console.log('error', error)
        });
    }

    const handleChange = (event) => {
      event.persist();
      setValues(values => ({ ...values, [event.target.name]: event.target.value }));
    };

    // const getArtist = () => {
    //   console.log(this.artist);
    //   return this.artist;
    // }


    return {
      getAllAlbumsByArtist,
      getArtistDetails,
      handleChange
    }
  }


export default useSearch;