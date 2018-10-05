import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import QuestionLists from '../components/QuestionLists'

class Dashboard extends Component {
  state = {
    answered: false
  }
  render() {
    if (this.props.authedUser === null) {
      return <Redirect to={{pathname: '/SignIn', state: {redirectUrl: '/'}}} />
    }
    return (
      <div>
        <ul>
          <li>
            <QuestionLists />
          </li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps({questions, users, authedUser}) {
  return {
    users,
    questions,
    authedUser
  }
}

export default connect(mapStateToProps)(Dashboard)