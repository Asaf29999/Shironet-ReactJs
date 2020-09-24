import { SET_ARTIST, ADD_FAVORITE, ADD_RECENT  } from "../Constants/action-types";

export function setArtist(payload) {
  return { type: SET_ARTIST, payload };
}

let nextfavoriteId = 0
export function addFavorite(text) {
  return {  
    type: ADD_FAVORITE,
    text };
}
let nextRecentId = 0
export function addRecent(text) {
  return { 
    type: ADD_RECENT,
    text };
}


