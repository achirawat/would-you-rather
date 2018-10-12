import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleSaveAnswer } from '../actions/questions'

class QuestionLists extends Component {
  state = {
    selectedAnswer: 'optionOne'
  }
  answered() {
    if(this.props.users[this.props.authedUser].answers[this.props.question_id]){
      return true
    }
    return false
  }
  onSubmit = (e) => {
    e.preventDefault()

    const { dispatch, question, authedUser } = this.props

    dispatch(handleSaveAnswer({
      authedUser,
      id: question.id,
      answer: this.state.selectedAnswer
    }))
  }
  answerChange = (e) => {
    this.setState({ selectedAnswer: e.target.value })
  }
  render() {

    return (
      <div className="col-lg-12">
        <div className="col-lg-4"></div>
        <div className="question panel panel-primary col-lg-5">
          <h3>{this.props.users[this.props.question.author].name} ask:</h3>
          <img src={this.props.users[this.props.question.author].avatarURL} alt="Avatar" style={{ height: "100px", width: "100px", borderRadius: "50%" }}/>
          <h3>Would You Rather ...</h3>
          <h4>{this.props.question.optionOne.text} OR {this.props.question.optionTwo.text}</h4>
          <Link to={`/questions/${this.props.id}`} id={this.props.id}>
            <button type="submit" >Vote</button>
          </Link>
        </div>
        <div className="col-lg-3"></div>
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