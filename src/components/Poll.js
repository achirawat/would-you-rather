import React, { Component } from 'react'
import { connect } from 'react-redux'

class Poll extends Component {
  state = {
    selectedAnswer: 'optionOne'
  }
  answered(){
    if(this.props.users[this.props.authedUser].answers[this.props.question_id]){
      return true
    }
    return false
  }
  answerChange = (e) => {
    this.setState({ selectedAnswer: e.target.value })
  }
  render() {
    return (
      <div>
        <h3>{this.props.users[this.props.question.author].name} ask:</h3>
        <img src={this.props.users[this.props.question.author].avatarURL} alt="Avatar" style={{ height: "100px", width: "100px", borderRadius: "50%" }}/>
        <h2>Results</h2>
        <div className="panel panel-primary">
          <h4>Would you rather {this.props.question.optionOne.text}?</h4>
        </div>
        <div className="panel panel-primary">
          <h4>Would you rather {this.props.question.optionTwo.text}?</h4>
        </div>
      </div>
    )
  }
}

export default connect()(Poll)