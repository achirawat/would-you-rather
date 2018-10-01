import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Nav extends Component {
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
            <img />
          </li>
          <li>
            <NavLink to='signin' exact activeClassName='active'>Logout</NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}
