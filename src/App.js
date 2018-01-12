import React, { Component } from 'react';
import './reset.css'
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Auth from './components/auth/auth';
import Home from './components/home/home';
import Profile from './components/profile/profile';
import Search from './components/search/search';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Switch>
        <Route path ='/' component={ Auth } exact/>
        <Route path ='/home' component={ Home }/>
        <Route path ='/profile' component={ Profile }/>
        <Route path ='/search' component={ Search }/>
      </Switch>
      </div>
    );
  }
}

export default App;
