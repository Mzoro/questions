import React from 'react';
import { browserHistory } from 'react-router';

class LoginForm extends React.Component {
  login(event) {
    event.preventDefault()
    const userName = this.refs.userName.value
    const path = `/${userName}/questions`
    browserHistory.push(path)
  }
  render() {
    return (
      <form onSubmit={this.login.bind(this)}>
        <h2>Please enter your name</h2>
        <input type='text' ref='userName' required/>
        <button type='Submit'>enter</button>
      </form>  
    )  
  }
}

export default LoginForm