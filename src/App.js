import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Homepage from './Components/Homepage/Homepage'
import Artistpage from './Components/Artistpage/Artistpage'


class App extends React.Component {

  state = {
    // Now the state is duplicated because clickCounter lives both
    // inside Button and App. You could just leave the clickCounter in
    // App and remove it from Button. Then you would also pass the
    // clickCounter to Button as props as you pass it to Info.
    // This way state would not be duplicated and in general it is advised
    // in React to not duplicate state, although in this particular example, it doesn't do much harm IMHO.
    currnetArtist: {}
  };
  
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={() => <Homepage/>} />
            <Route path="/ArtistPage" component={() => <Artistpage/>} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;