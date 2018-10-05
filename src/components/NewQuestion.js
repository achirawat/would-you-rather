import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { handleAddQuestion } from '../actions/questions';
// import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends Component {
  state = {
    optionOne: '',
    optionTwo: '',
    toHome: false
  }
  optionOneChange = (e) => {
    this.setState(() => ({ optionOne: e.target.value }))
  }
  optionTwoChange = (e) => {
    this.setState(() => ({ optionTwo: e.target.value }))
  }
  onSubmit = (e) => {
    e.preventDefault()

    const { optionOne, optionTwo } = this.state
    const { dispatch } = this.props

    dispatch(handleAddQuestion({
      optionOne,
      optionTwo
    }))

    this.setState(()=>({
      optionOne: '',
      optionTwo: '',
      toHome: true
    }))
  }
  onDisabled = () => {
    if (this.state.optionOne === '' || this.state.optionTwo === '') {
      return true
    } else {
      return false
    }
  }
  render() {
    const { optionOne, optionTwo, toHome } = this.state

    if (this.props.authedUser === null) {
      return <Redirect to={{pathname: '/SignIn', state: {redirectUrl: '/add'}}} />
    }
    else if (toHome === true) {
      return <Redirect to='/' />
    }

    return (
      <div className="newquestion">
        <h1>Create New Question</h1>
        <p>Complete the question:</p>
        <h3>Would you rather ...</h3>
        <form submit={this.onSubmit}>
          <input type="text" placeholder="option1" value={optionOne} onChange={this.optionOneChange} />
          <h3>OR</h3>
          <input type="text" placeholder="option2" value={optionTwo} onChange={this.optionTwoChange} />
          <br />
          <br />
          <button type="submit" disabled={this.onDisabled()}>Submit</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps({ authedUser }){
  return {
    authedUser
  }
}

export default connect(mapStateToProps)(NewQuestion)