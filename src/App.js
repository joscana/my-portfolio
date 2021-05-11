import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Router>
      <div>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}

export default App;
