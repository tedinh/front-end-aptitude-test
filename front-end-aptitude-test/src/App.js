import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Nav from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import Entertainment from './components/entertainment/entertainment';
import Technology from './components/technology/technology';


import './App.css';

class App extends Component {
  render() {
    return (
      <div>
      <Nav />
        <Switch>
          <Route exact path='/' component= { Home } />
          <Route path='/entertainment' component= { Entertainment } />
          <Route path='/tech' component= { Technology } />
        </Switch>
      <Footer />
      </div>
    );
  }
}

export default App;
