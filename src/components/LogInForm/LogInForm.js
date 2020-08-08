import React, { Component } from 'react'

import './LogInForm.css'

class LogInForm extends Component {
  render() {
    return (
      <div className="login-form">

        <form>
          <h2 className="text-center">Log In</h2>
          <div className="form-group">
            <input type='text' name='email' placeholder='Email' className="inputfield" onChange={this.props.handleInput} />
          </div>
          <div className="form-group">
            <input type='text' name='password' placeholder='Password' className="inputfield" onChange={this.props.handleInput} />
          </div>
          <div className="form-group">
            <input value='Submit' type='submit' className="login-signup-btn" onClick={this.props.handleLogIn} />
          </div>
        </form>
      </div>
    )
  }
}

export default LogInForm
