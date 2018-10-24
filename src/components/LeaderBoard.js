import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class LeaderBoard extends Component {
  render() {
    if (props.authedUser === null) {
      return <Redirect to={{pathname: '/SignIn', state: {redirectUrl: '/LeaderBoard'}}} />
    }
    return (
      <div className="col-lg-12">
        <div className="col-lg-4"></div>
        <div className="question panel panel-primary col-lg-5">
          <div>
            <ul>
              <li>
                <div>
                  <img src={`../${this.props.users[this.props.question.author].avatarURL}`} alt="Avatar" style={{ height: "100px", width: "100px", borderRadius: "50%" }}/>
                  <h3>{this.props.users[this.props.question.author].name}</h3>
                  <div>
                    <p>Answered questions: {}</p>
                    <p>Created questions: {}</p>
                    <p>Score: {}</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-3"></div>
      </div>
    );
  }
}

function mapStateToProps ({ users, authedUser }) {
  return {

  }
}

export default connect(mapStateToProps)(LeaderBoard);