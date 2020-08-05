import React, { Component } from 'react';
import { Route } from 'react-router'
import './App.css';
import Catalogue from './components/Catalogue/Catalogue'
import Order from './components/Order/Order'



class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        <div className="nav">
              <h1>Welcome to Narwhal Bakery</h1>
            </div>
        </header>
        <body>
          <div className="container">
            
              <Route path="/orders" component={Order} />
            
              <Route path="/catalog" component={Catalogue} />

          </div>
        </body>
      </div>
    )
  }
}

export default App;
