import React, { Component } from 'react'


import './SignUpForm.css'

class SignUpForm extends Component {




  render() {
    if (this.props.isLoggedIn !== true) {

      return (
        <div className="login-form">

          <form>
            <h2 className="text-center">Sign Up</h2>
            <div className="form-group">
              <input type='text' name='email' placeholder='Email' className="inputfield" onChange={this.props.handleInput} />
            </div>

            <div className="form-group">
              <input type='text' name='password' placeholder='Password' className="inputfield" onChange={this.props.handleInput} />
            </div>
            <div className="form-group">
              <input value='Submit' type='submit' className="login-signup-btn" onClick={this.props.handleSignUp} />
            </div>
          </form>
        </div>
      )
    }
    else { return <div><h1>Success! You're now signed up and logged in</h1></div> }

  }
}

export default SignUpForm
