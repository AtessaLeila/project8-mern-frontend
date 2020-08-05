import React, { Component } from 'react';
import './App.css';
import Catalogue from './components/Catalogue/Catalogue'
import Order from './components/Order/Order'



class App extends Component {
  render() {
    return (
      <div className="App">
        <body>
          <div className="container">
            <div className="nav">
              <h1>Welcome to Narwhal Bakery</h1>
            </div>
            {/* <div>
              <Order />
            </div> */}
            <div>
              <Catalogue />
            </div>

          </div>
        </body>
      </div>
    )
  }
}

export default App;
