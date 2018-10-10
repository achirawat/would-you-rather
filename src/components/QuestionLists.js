import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { handleSaveAnswer } from '../actions/questions'

class QuestionLists extends Component {
  // state = {
  //   selectedAnswer: 'optionOne'
  // }
  // answered(){
  //   if(this.props.users[this.props.authedUser].answers[this.props.question_id]){
  //     return true
  //   }
  //   return false
  // }
  onSubmit = (e) => {
    e.preventDefault()

    const { dispatch, question, authedUser } = this.props

    dispatch(handleSaveAnswer({
      authedUser,
      id: question.id,
      answer: this.state.selectedAnswer
    }))
  }
  // answerChange = (e) => {
  //   this.setState({ selectedAnswer: e.target.value })
  // }
  render() {

    return (
      <div className="col-lg-12">
        <div className="col-lg-4"></div>
        <div className="question panel panel-primary col-lg-5">
                <div>
                  <h3>{this.props.users[this.props.question.author].name} ask:</h3>
                  <img src={this.props.users[this.props.question.author].avatarURL} alt="Avatar" style={{ height: "100px", width: "100px", borderRadius: "50%" }}/>
                  <p>Would You Rather ...</p>
                  <form onSubmit={this.onSubmit}>
                    <div >
                      <input type="radio" value="optionOne" onChange={this.answerChange} checked={this.state.selectedAnswer === 'optionOne'}/>
                      {this.props.question.optionOne.text}
                    </div>
                    <div >
                      <input type="radio" value="optionTwo" onChange={this.answerChange} checked={this.state.selectedAnswer === 'optionTwo'}/>
                      {this.props.question.optionTwo.text}
                    </div>
                    <Link to={`/questions/${this.props.id}`} id={this.props.id}>
                      <button type="submit" >Submit</button>
                    </Link>
                  </form>
                </div>
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