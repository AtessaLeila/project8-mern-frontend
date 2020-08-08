import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import './SignUpForm.css'

class SignUpForm extends Component {

  

  render () {

    const field = {
      border: "3px solid #F1F3F4",
      fontSize: "15px",
      height: "30px",
      width: "170px",
  }

  const subBut = {
    fontSize: "18px",
    backgroundColor: "#dccfe2",
    color: "#3c3c3c",
    border: "none",
    borderRadius: "2px",
    padding: "12px 20px",
    margin: "10px 0 0 0"
}

    if (this.props.isLoggedIn !== true){

    return (
      <div className="login-page">
        <h2>Sign Up</h2>

        <form className="login-form">
          <div className="input-form-blank-container">
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' style={field} onChange={this.props.handleInput} />
          </div>
          <div className="input-form-blank-container">
            <label htmlFor='password'>Password</label>
            <input type='text' name='password' style={field} onChange={this.props.handleInput} />
          </div>
          <input value='Sign Up' type='submit' style={subBut} onClick={this.props.handleSignUp} />
        </form>
      </div>
    )
    }
    else { return <div><h1>Success! You're now signed up and logged in</h1></div> }

  }
}

export default SignUpForm
