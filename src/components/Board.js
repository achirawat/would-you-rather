import React from 'react'
import { connect } from 'react-redux'

const Board = props => {
  return (
    <li>
      <div className="question panel panel-primary col-sm-12">
        <div className="box">
          <div className="col-sm-4">
            <img src={props.user.avatarURL} alt="Avatar" style={{ height: "100px", width: "100px", borderRadius: "50%" }}/>
            <h3>{props.user.name}</h3>
          </div>
          <div className="col-sm-8 total">
            <h4>Answered questions: {props.answers.length}</h4>
            <h4>Created questions: {props.user.questions.length}</h4>
            <h4>Score: {props.answers.length + props.user.questions.length}</h4>
          </div>
        </div>
      </div>
    </li>
  )
}

function mapStateToProps({users},{id}) {
  const user = users[id]
  const answers = Object.keys(users[id].answers)

  return {
    user,
    answers
  }
}

export default connect(mapStateToProps)(Board)