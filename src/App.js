import React, { Component } from 'react';
import './App.css';
import Catalogue from './components/Catalogue/Catalogue'
import Order from './components/Order/Order'
import CatalogueSidebar from './components/Catalogue/CatalogueSidebar'
import './components/Catalogue/CatalogueSidebar.css'



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
            {/* <div>
              <Order />
            </div> */}

            <Catalogue />
            <CatalogueSidebar />

          </div>
        </body>
      </div>
    )
  }
}

export default App;
