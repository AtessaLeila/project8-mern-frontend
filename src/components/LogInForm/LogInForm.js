import React, { Component } from 'react'

import './LogInForm.css'
import { Link } from 'react-router-dom'

class LogInForm extends Component {
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

    return (
      <div className="login-page">
        <h2>Log In</h2>

        <form className="login-form">
          <div className="input-form-blank-container">
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' style={field} onChange={this.props.handleInput} />
          </div>
          <div className="input-form-blank-container">
            <label htmlFor='password'>Password</label>
            <input type='text' name='password' style={field} onChange={this.props.handleInput} />
          </div>
          <input value='Log In' type='submit' style={subBut} onClick={this.props.handleLogIn} />
        </form>
        <Link to="/signup" style={{textDecoration: "none", color: "#3c3c3c"}}><p>Sign Up</p></Link>
      </div>
    )
  }
}

export default LogInForm
