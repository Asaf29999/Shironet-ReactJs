import { SET_ARTIST } from '../Constants/action-types';

const initialState = {
  artist: {}
};

function rootReducer(state = initialState, action) {
    if (action.type === SET_ARTIST) {
        return Object.assign({}, state, {
            artist: action.payload
        });
      }
  return state;
}

export default rootReducer;