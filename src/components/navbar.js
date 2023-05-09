import React from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase";

class NavBar extends React.Component {
  handleLogout = () => {
    auth.signOut().then(() => {
      // Handle successful sign out
    }).catch((error) => {
      // Handle errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
  }

  render() {
    return (
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Chat App</Link>
          <div className="collapse navbar-collapse">
            {this.props.user ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/chat">Chat</Link>
                </li>
              </ul>
            ) : null}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {this.props.user ? (
                <li className="nav-item">
                  <button className="btn btn-outline-light" onClick={this.handleLogout}>Logout</button>
                </li>
              ) : (
                <li className="nav-item">
                  <Link className="nav-link" to="/">Login</Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
