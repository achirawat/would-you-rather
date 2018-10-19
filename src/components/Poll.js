import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleSaveAnswer } from '../actions/questions'

class Poll extends Component {
  state = {
    selectedAnswer: 'optionOne',
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
      qid: question.id,
      answer: this.state.selectedAnswer
    }))
  }
  answerChange = (e) => {
    this.setState({ selectedAnswer: e.target.value })
  }
  render() {  
    if(this.props.authedUser === null){
      return <Redirect to={{pathname: '/SignIn', state: {redirectUrl: `/questions/${this.props.question_id}`, id: this.props.question_id}}} />
    }
    return (
      <div className="col-lg-12">
        <div className="col-lg-4"></div>
      <div className="question panel panel-primary col-lg-5">
        {this.props.authedUser === null ?
            <div>Loading...</div>  :
              this.answered() !== true ?
                <div>
                  <h3>{this.props.users[this.props.question.author].name} ask:</h3>
                  <img src={`../${this.props.users[this.props.question.author].avatarURL}`} alt="Avatar" style={{ height: "100px", width: "100px", borderRadius: "50%" }}/>
                  <p>Would You Rather ...</p>
                  <form onSubmit={this.onSubmit}>
                    <div className="radio">
                      <label>
                        <input type="radio" value="optionOne" onChange={this.answerChange} checked={this.state.selectedAnswer === 'optionOne'}/>
                        {this.props.question.optionOne.text}
                      </label>
                    </div>
                    <div className="radio">
                      <label>
                        <input type="radio" value="optionTwo" onChange={this.answerChange} checked={this.state.selectedAnswer === 'optionTwo'}/>
                        {this.props.question.optionTwo.text}
                      </label>
                    </div>
                    <button type="submit">Vote</button>
                  </form>
                </div>
                :
                <div>
                  <h3>{this.props.users[this.props.question.author].name} ask:</h3>
                  <img src={`../${this.props.users[this.props.question.author].avatarURL}`} alt="Avatar" style={{ height: "100px", width: "100px", borderRadius: "50%" }}/>
                  <h2>Results</h2>
                  <div>
                    {this.state.selectedAnswer === 'optionOne' ? 
                      <div className="panel panel-primary">
                        <div class="panel-heading">Your Voted</div>
                        <div class="panel-body">
                          <h4>Would you rather {this.props.question.optionOne.text}?</h4>
                        </div>
                      </div>
                      :
                      <div className="panel panel-primary">
                        <h4>Would you rather {this.props.question.optionOne.text}?</h4>
                      </div>
                    }
                  </div>
                  <div>
                    {this.state.selectedAnswer === 'optionTwo' ? 
                      <div className="panel panel-primary">
                        <div class="panel-heading">Your Voted</div>
                        <div class="panel-body">
                          <h4>Would you rather {this.props.question.optionTwo.text}?</h4>
                        </div>
                      </div>
                      :
                      <div className="panel panel-primary">
                        <h4>Would you rather {this.props.question.optionTwo.text}?</h4>
                      </div>
                    }
                  </div>
                </div>
          }
      </div>
      <div className="col-lg-3"></div>
      </div>
    )
  }
}

function mapStateToProps({authedUser, users, questions}, props) {
  const { question_id } = props.match.params
  const question = questions[question_id]

  return {
    question_id,
    question,
    authedUser,
    users,
  }
}

export default connect(mapStateToProps)(Poll)