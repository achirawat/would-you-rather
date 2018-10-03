import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import { Redirect } from 'react-router-dom'

class SignIn extends Component {
  state = {
    selectedUser: '',
    toHome: false
  }
  onSubmit = (e) => {
    e.preventDefault()

    const { dispatch } = this.props
    const { selectedUser } = this.state

    dispatch(setAuthedUser(selectedUser))

    this.setState({toHome: true})
  }

  render() {
    const { toHome } = this.state
    if (toHome === true) {
      return <Redirect to='/' />
    }
    return (
        <div className="center">
          <h3>Welcome to the Would You Rather App!</h3>
          <p>Please sign in to continue</p>
          <form onSubmit={this.onSubmit}>
              <select>
                {this.props.userIDs.map((id) => (
                  <option key={id} value={this.props.users[id].id}>{this.props.users[id].name}</option>
                ))}
              </select>
              <br />
              <button type="submit">Sign In</button>
          </form>
        </div>
    )
  }
}

function mapStateToProps({ users }) {
  const userIDs = Object.keys(users)
  return {
    users,
    userIDs
  }
}

export default connect(mapStateToProps)(SignIn)