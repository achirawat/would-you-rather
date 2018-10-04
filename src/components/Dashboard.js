import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionLists from '../components/QuestionLists'

class Dashboard extends Component {
  render() {
    return (
      <div>
        <h3>UnAnswer Questions</h3>
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