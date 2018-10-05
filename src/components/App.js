import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Nav from './Nav'
import Dashboard from './Dashboard'
import SignIn from './SignIn'
import NewQuestion from './NewQuestion'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <hr />
          <Switch>
            <Route path='/' exact component={Dashboard} />
            <Route path='/SignIn' component={SignIn} />
            <Route path='/new' component={NewQuestion} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default connect()(App);
