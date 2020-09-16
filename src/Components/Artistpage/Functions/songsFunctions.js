import swal from 'sweetalert';
import {useCallback } from 'react';
import { useHistory } from "react-router-dom";
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch, useStore} from 'react-redux'
import {setArtist} from '../../../Redux/Actions/actions';


const songsFunction = (artistname) => {
 
    const getAllAlbumsByArtist = () => {
      return fetch(`https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=${artistname}`)
        .then(response => {
         // console.log(response.json())
          return response.json();
        })
        .then(result => {
         // console.log(result.album)
            return result.album;
        })
    }

    const getAllSongsByArtist = async () => {
      const albums = await getAllAlbumsByArtist()
      console.log(albums)
      const albumsNames = [];

      albums.forEach(album => {
        console.log(album.strAlbum)
        albumsNames.push(album.strAlbum);

      });
    return albumsNames;
           
    }





    return {
      getAllAlbumsByArtist,
      getAllSongsByArtist
    }
  }


export default songsFunction;