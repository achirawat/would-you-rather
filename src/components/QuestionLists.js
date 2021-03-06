import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class QuestionLists extends Component {
  render() {

    return (
      <div className="col-lg-12">
        <div className="col-lg-4"></div>
        <div className="question panel panel-primary col-lg-5">
          <div className="box">
            <h3>{this.props.users[this.props.question.author].name} ask:</h3>
            <img src={this.props.users[this.props.question.author].avatarURL} alt="Avatar" style={{ height: "100px", width: "100px", borderRadius: "50%" }}/>
            <h3>Would You Rather ...</h3>
            <h4>{this.props.question.optionOne.text} OR {this.props.question.optionTwo.text}</h4>
            <Link to={`/questions/${this.props.id}`} id={this.props.id}>
              <button type="submit">View</button>
            </Link>
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