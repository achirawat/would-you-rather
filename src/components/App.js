import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
// import { connect } from 'react-redux'
// import { LoadingBar } from 'react-redux-loading'
import Nav from './Nav'
import Dashboard from '../components/Dashboard'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <hr />
          <Dashboard />
        </div>
      </Router>
    );
  }
}

export default App;
