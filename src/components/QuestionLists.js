import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionLists extends Component {
  render() {

    return (
      <div>
        <h3>{this.props.users[this.props.question.author].name}</h3>
      </div>
    )
  }
}

function mapStateToProps({authedUser, users, questions}, {id}) {
  const question = questions[id]

  return {
    question: question,
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(QuestionLists)