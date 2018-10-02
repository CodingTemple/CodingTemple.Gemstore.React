import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation';
import {Switch, Route} from 'react-router-dom';
import Home from './components/views/Home';
import Weather from './components/views/Weather';
import gems from './static/data/gems';

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className="container">
          <Switch>
            <Route exact path="/" render={() => <Home gems={gems} />}></Route>
            <Route exact path="/weather" component={Weather}></Route>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
