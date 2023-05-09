import React from "react";
import { auth, googleProvider } from "../firebase";
import { Navigate } from "react-router-dom";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      navigate: false 
    };
  }

  signInWithGoogle = () => {
    auth
      .signInWithPopup(googleProvider)
      .then((result) => {
        


        this.setState({ navigate: true });
      })
      .catch((error) => {

        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  render() {
    const { navigate } = this.state;
    if (navigate) {

      return <Navigate to="/chat" />;
    }
    return (
      <div className="text-center mt-5">
        <h1>Sign In</h1>
        <button className="btn btn-primary" onClick={this.signInWithGoogle}>
          Sign in with Google
        </button>
      </div>
    );
  }
}

export default SignIn;
