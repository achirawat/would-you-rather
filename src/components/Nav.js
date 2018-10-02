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
      <nav className='nav'>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='active'>Home</NavLink>
          </li>
          <li>
            <NavLink to='new' exact activeClassName='active'>New Question</NavLink>
          </li>
          <li>
            <NavLink to='leader' exact activeClassName='active'>Leader Board</NavLink>
          </li>
          <li>
            <NavLink to='signin' exact activeClassName='active'>
              {this.props.authedUser === null ?
                <span>Sign In</span> :
                <div>
                  <img src={} alt="Avatar"/>
                  <span className="sign-out" onClick={}>Sign Out</span>
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
