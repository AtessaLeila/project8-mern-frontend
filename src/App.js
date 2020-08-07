import React, { Component } from "react";
import { Route, Link, Redirect } from "react-router-dom";
import "./App.css";
import Catalogue from "./components/Catalogue/Catalogue";
import Order from "./components/Order/Order";
import Button from "./components/Button/Button";
import SignUpForm from './components/SignUpForm/SignUpForm'
import LogInForm from './components/LogInForm/LogInForm'
import LogOut from './components/LogOut/LogOut'
<<<<<<< HEAD
import axios from 'axios';
=======
import axios from 'axios'
import loginModal from './components/LogInForm/LoginModal'
import LoginModal from "./components/LogInForm/LoginModal";
>>>>>>> 871c4c493be48a16b0ae05ef1018bb893ff756c9

let url = "https://group-project-mern-backend.herokuapp.com"


class App extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      isLoggedIn: false,
    };

    this.handleLogOut = this.handleLogOut.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleLogIn = this.handleLogIn.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  componentDidMount() {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true,
      });
    } else {
      this.setState({
        isLoggedIn: false,
      });
    }
  }

<<<<<<< HEAD
  handleLogOut() {
    this.setState({
      email: '',
      password: '',
      isLoggedIn: false
    })
    localStorage.clear()
=======
  handleLogOut(e) {
    this.setState({
      email: "",
      password: "",
      isLoggedIn: false,
    });
    localStorage.clear();
>>>>>>> 871c4c493be48a16b0ae05ef1018bb893ff756c9
  }

  handleInput(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSignUp(e) {
    e.preventDefault()
<<<<<<< HEAD
    axios.post('https://group-project-mern-backend.herokuapp.com/users/signup', {
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        localStorage.token = response.data.token
        this.setState({ isLoggedIn: true })
      })
      .catch(err => console.log(err))
=======
    axios.post(`${url}/users/signup`, {
      email: this.state.email,
      password: this.state.password
    })
    .then(response => {
      localStorage.token = response.data.token
      this.setState({ isLoggedIn: true })
    })
    .then(() => {
      return <div><h1>Success! You're now signed up and logged in</h1></div>
    })
    .catch(err => console.log(err))
>>>>>>> 871c4c493be48a16b0ae05ef1018bb893ff756c9
  }

  handleLogIn(e) {
    e.preventDefault()
<<<<<<< HEAD
    axios.post('https://group-project-mern-backend.herokuapp.com/users/login', {
      email: this.state.email,
      password: this.state.password
    })
      .then(response => {
        localStorage.token = response.data.token
        this.setState({ isLoggedIn: true })
      })
      .catch(err => console.log(err))
=======
    axios.post(`${url}/users/login`, {
      email: this.state.email,
      password: this.state.password
    })
    .then(response => {
      localStorage.token = response.data.token
      this.setState({isLoggedIn: true})
    })
    .catch(err => console.log(err))
>>>>>>> 871c4c493be48a16b0ae05ef1018bb893ff756c9
  }

 
  render() {

    if (this.state.isLoggedIn !== true){
      return (
        <div className="App">
        <header className="nav">
          <h1>Welcome to Narwhal Bakery</h1>
          <div className="header-buttons">
            <Link to="/signup"><Button type="create" label="Sign Up" /></Link>
            <Link to="/login"><Button type="create" label="Log In" /></Link>
          </div>
        </header>
        <div className="container">
          <Route path='/signup'
            render={(props) => {
              return (
                <SignUpForm url={url} isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleSignUp={this.handleSignUp} />
              )
            }}
          />
          <Route path='/logout'
            render={(props) => {
              return (
                <LogOut url={url} isLoggedIn={this.state.isLoggedIn} handleLogOut={this.handleLogOut} />
              )
            }}
          />
          <Route path='/login'
            render={(props) => {
              return (
                <LogInForm url={url} isLoggedIn={this.state.isLoggedIn} handleInput={this.handleInput} handleLogIn={this.handleLogIn} />
              )
            }}
          />
        </div>
        <div>
        </div>
      </div>
      )
    }
    else {
    return (
      <div className="App">
        <header className="nav">
          <h1>Welcome to Narwhal Bakery</h1>
          <div className="header-buttons">
            <div className="nav-buttons">
            <Link to="/catalog/"> <Button type="create" label="My Catalog" /></Link>
            <Link to="/orders"> <Button type="create" label="My Orders" /></Link>
            </div>
            <Link to="/logout"><Button type="create" label="Log Out" /></Link>
          </div>
        </header>
        <div className="container">
          <Route path="/"
            render={() => { return <Redirect to="/catalog" /> }}
            exact />
          <Route
            path="/orders"
            render={() => {
              return <Order url={url} />;
            }}
          />

          <Route
            path="/catalog/"
            render={() => {
              return <Catalogue url={url} />;
            }}
          />
          <Route
            path="/signup"
            render={props => {
              return (
                <SignUpForm
                  url={url}
                  isLoggedIn={this.state.isLoggedIn}
                  handleInput={this.handleInput}
                  handleSignUp={this.handleSignUp}
                  handleLogOut={this.handleLogOut}
                />
              );
            }}
          />
          <Route
            path="/logout"
            render={props => {
              return (
                <LogOut
                  url={url}
                  isLoggedIn={this.state.isLoggedIn}
                  handleLogOut={this.handleLogOut}
                />
              );
            }}
          />
          <Route
            path="/login"
            render={props => {
              return (
                <LogInForm
                  url={url}
                  isLoggedIn={this.state.isLoggedIn}
                  handleInput={this.handleInput}
                  handleLogIn={this.handleLogIn}
                />
              );
            }}
          />
        </div>
        <div></div>
      </div>
    );
          }
  }
}

export default App;
