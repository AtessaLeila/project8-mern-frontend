import React, { Component } from "react";

import "./LogOut.css";

class LogOut extends Component {
  render() {
    return (
      <div>
        <div className="logout-page">
          <h2> Thanks for Ordering!</h2>
          <form className="logout-form">
            <input
              className="logout-input"
              value="Log Out"
              type="submit"
              onClick={this.props.handleLogOut}
            />
          </form>
        </div>
      </div>
    );
  }
}

export default LogOut;
