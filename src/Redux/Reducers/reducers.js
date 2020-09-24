import { SET_ARTIST, ADD_FAVORITE, ADD_RECENT } from '../Constants/action-types';

const initialState = {
  artist: {},
  favorites:[],
  recents:[],
};

function rootReducer(state = initialState, action) {
    if (action.type === SET_ARTIST) {
        return Object.assign({}, state, {
            artist: action.payload
        });
      }
     else if (action.type === ADD_FAVORITE) {
        return Object.assign({}, state, {
          favorites: [...state.favorites, action.text]
        });
      }
      else if (action.type === ADD_RECENT) {
        return Object.assign({}, state, {
          recents: [...state.recents, action.text]
        });
      }
  return state;
}

export default rootReducer;