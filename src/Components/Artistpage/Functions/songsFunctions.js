// import swal from 'sweetalert';
// import { useCallback } from 'react';
// import { useHistory } from "react-router-dom";
// import { useState, useEffect } from 'react';
// import { connect } from 'react-redux';
// import { useDispatch, useStore } from 'react-redux'
// import { setArtist } from '../../../Redux/Actions/actions';


const songsFunction = (idArtist) => {

  const getAllAlbumsByArtist = () => {
    return fetch(`https://theaudiodb.com/api/v1/json/2/album.php?i=${idArtist}`)
      .then(response => {
        // console.log(response.json())
        return response.json();
      })
      .then(result => {
        // console.log(result.album)
        return result.album;
      })
  }

  async function asyncForEach(array, callback) {
    for (let index = 0; index < array.length; index++) {
      await callback(array[index], index, array);
    }
  }
  const getAllSongsByArtist = async () => {
    const albums = await getAllAlbumsByArtist()
    console.log(albums)
    const songs = [];
    if (albums != null) {
      // fix 
      await asyncForEach(albums, async (album) => {
        const allAlbumSongs = await getAllSongsByAlbum(album.idAlbum)
        await songs.push(...allAlbumSongs);
        console.log(songs)
      });
    }
    console.log(songs)
    return songs;
  }

  const getAllSongsByAlbum = (albumid) => {
    return fetch(`https://theaudiodb.com/api/v1/json/1/track.php?m=${albumid}`)
      .then(response => {
        return response.json();
      })
      .then(result => {
        console.log(result);
        return result.track;
      })
  }



  return {
    getAllAlbumsByArtist,
    getAllSongsByArtist
  }
}


export default songsFunction;