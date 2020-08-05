
import React, { Component } from 'react';
import { Route } from 'react-router'
import './App.css';
import Catalogue from './components/Catalogue/Catalogue'
import Order from './components/Order/Order'
import CatalogueSidebar from './components/Catalogue/CatalogueSidebar'


let url = "https://group-project-mern-backend.herokuapp.com"

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

            {/* <Catalogue />
            <CatalogueSidebar /> */}




            <Route path="/orders" component={Order} />

            <Route path="/catalog"
              render={() => { return <Catalogue url={url} /> }} />

            <Route
              path="/catalog"
              render={() => {
                return <Catalogue url={url} />;
              }}
            />
          </div>
        </body>
      </div>
    );
  }
}

export default App;
