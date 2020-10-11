import { connect } from 'react-redux'
import {setArtist} from '../Actions/actions';
import ApiFunction from '../../Components/Homepage/Functions/ApiFunction'

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