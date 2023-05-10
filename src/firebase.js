import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDfcx_bFKICF53JFHNEg-11w5d6PXmvfMM",
  authDomain: "chat-6f106.firebaseapp.com",
  projectId: "chat-6f106",
  storageBucket: "chat-6f106.appspot.com",
  messagingSenderId: "273811204387",
  appId: "1:273811204387:web:2ed99a11f0fec226214496",
  measurementId: "G-XWRLJ1P6DM",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Export Firebase services
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// Export Google sign-in provider
export const googleProvider = new firebase.auth.GoogleAuthProvider();

// Function to sign in with Google
export const signInWithGoogle = () => {
  return auth.signInWithPopup(googleProvider);
};

// Function to sign out
export const signOut = () => {
  return auth.signOut();
};
