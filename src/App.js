import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { auth } from "./firebase";
import NavBar from "./components/navbar";
import Chat from "./components/chat";
import SignIn from "./components/login";


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null
    };
  }

  componentDidMount() {
    this.unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar user={this.state.user} />
          <div className="container mt-3">
            <Routes>
              <Route exact path="/" element={<SignIn />} />
              <Route path="/chat" element={<Chat />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
