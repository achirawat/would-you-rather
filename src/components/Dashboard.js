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
          {this.props.questionIDs.map((id) => (
            this.state.answered === true ?
              this.props.users[this.props.authedUser].answers[id] !== undefined && (
                <li key={id}>
                  <QuestionLists id={id}/>
                </li>
              ) :
              this.props.users[this.props.authedUser].answers[id] === undefined && (
                <li key={id}>
                  <QuestionLists id={id}/>
                </li>
              )
          ))}      
        </ul>
      </div>
    )
  }
}

function mapStateToProps({questions, users, authedUser}) {
  return {
    questionIDs: Object.keys(questions).sort((a, b) => questions[b].timestamp - questions[a].timestamp),
    users,
    authedUser,
    questions
  }
}

export default connect(mapStateToProps)(Dashboard)