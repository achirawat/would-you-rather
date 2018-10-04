import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Nav extends Component {
  signOut = () => {
    const { dispatch } = this.props

    dispatch(setAuthedUser(null))
  }
  render() {
    return (
      <nav className="nav">
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/new' activeClassName='active'>New Question</NavLink>
          </li>
          <li>
            <NavLink to='/leader' activeClassName='active'>Leader Board</NavLink>
          </li>
          <li>
            <NavLink to='/SignIn' activeClassName='active'>
              {this.props.authedUser === null ?
                <span>Sign In</span> :
                <div>
                  <img src={this.props.users[this.props.authedUser].avatarURL} alt="Avatar" className='avatar'/>
                  <span className="sign-out" onClick={this.signOut}>Sign Out</span>
                </div>
              }
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}

function mapStateToProps({ authedUser, users }) {
  return {
    authedUser,
    users
  }
}

export default connect(mapStateToProps)(Nav)
