import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import Homepage from './Components/Homepage/Homepage'
import Artistpage from './Components/Artistpage/Artistpage'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={() => <Homepage />} />
          <Route path="/ArtistPage" component={() => <Artistpage />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;