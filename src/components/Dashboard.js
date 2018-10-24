import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import QuestionLists from '../components/QuestionLists'

class Dashboard extends Component {
  state = {
    answered: false
  }
  setAnswered = (bool) => {
    this.setState({ answered: bool})
  }

  setClassName(bool) {
    if (this.state.answered === bool) {
      return "bold"
    }
    return "normal"
  }
  render() {
    if (this.props.authedUser === null) {
      return <Redirect to={{pathname: '/SignIn', state: {redirectUrl: '/'}}} />
    }
    return (
      <div className="question">
          <div className="type">
            <h3 onClick={() => this.setAnswered(false)} className={this.setClassName(false)}>Unanswered Questions</h3>
            <h3 onClick={() => this.setAnswered(true)} className={this.setClassName(true)}>Answered Questions</h3>
          </div>
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