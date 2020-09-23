import { SET_ARTIST, ADD_FAVORITE, ADD_RECENT  } from "../Constants/action-types";

export function setArtist(payload) {
  return { type: SET_ARTIST, payload };
}
export function addFavorite(payload) {
  return { type: ADD_FAVORITE, payload };
}
export function addRecent(payload) {
  return { type: ADD_RECENT, payload };
}