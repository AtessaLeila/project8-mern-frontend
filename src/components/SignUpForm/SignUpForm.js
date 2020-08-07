import React, { Component } from 'react'


import './SignUpForm.css'

class SignUpForm extends Component {


  

  render () {
    if (this.props.isLoggedIn !== true){
      
    return (
      <div>
        <h2>Sign Up</h2>

        <form>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' onChange={this.props.handleInput} />
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <input type='text' name='password' onChange={this.props.handleInput} />
          </div>
          <input value='Submit' type='submit' onClick={this.props.handleSignUp} />
        </form>
      </div>
    )
    }
    else {return <div><h1>Success! You're now signed up and logged in</h1></div>}

  }
}

export default SignUpForm
