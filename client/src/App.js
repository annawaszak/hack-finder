import './App.css';
import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';

export default class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={Signup} />
      </Switch>
      </div>
    )
  }
}

// import React from 'react';
// import Signup from './Components/Signup';
// import Login from './Components/Login';

// class App extends React.Component {
//   render() {
//     return <Login />;
//   }
// }

