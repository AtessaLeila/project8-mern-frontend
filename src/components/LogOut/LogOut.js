import React, { Component } from "react";

import "./LogOut.css";
import { Link } from "react-router-dom";
import Button from "../Button/Button";

class LogOut extends Component {
  render() {
    return (
      <div>
        <div className="logout-page">
          <h2> Thanks for Ordering!</h2>
          <h2> See you again soon!</h2>
          <div className="logout-button">
            <Link to="/login"><Button type="create" label="Log Back In" /></Link>
          </div>        
        </div>
      </div>
    );
  }
}

export default LogOut;
