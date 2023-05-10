import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { auth, firestore, signInWithGoogle, signOut } from "./firebase";
import NavBar from "./components/navbar";
import Chat from "./components/chat";
import SignIn from "./components/login";
import ContactList from "./components/contactlist";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      if (user) {
        saveUserToFirestore(user);
      }
    });

    return () => unsubscribe();
  }, []);

  const saveUserToFirestore = async (user) => {
    const userRef = firestore.collection("users").doc(user.uid);

    const snapshot = await userRef.get();
    if (!snapshot.exists) {
      const { email } = user;
      await userRef.set({ email });
    }
  };

  const handleSignIn = async () => {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Router>
      <div>
        <NavBar user={user} onSignOut={handleSignOut} />
        <div className="container mt-3">
          <Routes>
            <Route
              exact
              path="/"
              element={<SignIn onSignIn={handleSignIn} />}
            />
            <Route path="/chat" element={<Chat user={user} />} />
            {user && (
              <Route
                path="/contacts"
                element={<ContactList currentUser={user} />}
              />
            )}
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
