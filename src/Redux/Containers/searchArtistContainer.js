import { connect } from 'react-redux'
import ApiFunction from '../../Components/Homepage/Functions/ApiFunction'
import {setArtist} from '../Actions/actions';

const mapStateToProps = (state) => {
   return {
      artist: state
   };
};
const mapDispatchToProps = (dispatch) => {
   return {
    setArtist: (artist) => dispatch(setArtist(artist))
   };
};
export default connect(mapStateToProps, mapDispatchToProps)(ApiFunction);