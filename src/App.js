import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom'
import './App.css';
import Catalogue from './components/Catalogue/Catalogue'
import Order from './components/Order/Order'
import Button from './components/Button/Button'

let url = "https://group-project-mern-backend.herokuapp.com"


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="nav">
          <h1>Welcome to Narwhal Bakery</h1>
          <div className="header-buttons">
            <Link to="/catalog"> <Button type="create" label="My Catalog" /></Link>
            <Link to="/orders"> <Button type="create" label="My Orders" /></Link>
          </div>
        </header>
        <body>
          <div className="container">
            
              <Route path="/orders" component={Order} />
            
              <Route path="/catalog" 
              render={()=>{return<Catalogue url={url} />}} />

          </div>
        </body>
      </div>
    )
  }
}

export default App;
