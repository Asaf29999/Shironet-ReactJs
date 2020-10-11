const songsFunction = (artistname) => {

  const getAllAlbumsByArtist = () => {
    return fetch(`https://www.theaudiodb.com/api/v1/json/1/searchalbum.php?s=${artistname}`)
      .then(response => {
        return response.json();
      })
      .then(result => {
        return result.album;
      })
  }

  const getAllSongsByArtist = async () => {
    const albums = await getAllAlbumsByArtist()
    const albumsPromises = [];
    console.log(albums)
    var songs = [];
  
    if (albums != null) {
      albums.forEach(album => {
        const promise = getAllSongsByAlbum(album.idAlbum)
        albumsPromises.push(promise);
      })
     await Promise.all(albumsPromises).then((allAlbumSongs) => {
        allAlbumSongs.forEach(album =>{
           songs = songs.concat(album);
        })
      });
    }
    console.log(songs)
    return (songs);
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