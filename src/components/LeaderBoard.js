import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import Board from './Board'

class LeaderBoard extends Component {
  render() {
    if (this.props.authedUser === null) {
      return <Redirect to={{pathname: '/SignIn', state: {redirectUrl: '/LeaderBoard'}}} />
    }
    return (
      <div className="col-lg-12">
        <div className="col-lg-4"></div>
        <div className="col-lg-5">
          <ul>
            {this.props.score.map((user) => (
              <Board id={user.id} key={user.id}/>
            ))}
          </ul>
        </div>
        <div className="col-lg-3"></div>
      </div>
    );
  }
}

function mapStateToProps ({ users, authedUser }) {
  let score = []
  const userIDs = Object.keys(users)
  console.log(users, userIDs)

  userIDs.map((id) => {
    score.push({
      id: users[id].id,
      total: users[id].questions.length + (Object.keys(users[id].answers).length)
    })
    console.log(users[id])
  })

  score.sort((b, a) => parseFloat(a.total) - parseFloat(b.total))

  return {
    userIDs,
    score,
    authedUser
  }
}

export default connect(mapStateToProps)(LeaderBoard);