import { SET_ARTIST } from "../Constants/action-types";

export function setArtist(payload) {
  return { type: SET_ARTIST, payload };
}