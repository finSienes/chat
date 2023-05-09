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
    measurementId: "G-XWRLJ1P6DM"
};


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
export const firestore = firebase.firestore();
const googleProvider = new firebase.auth.GoogleAuthProvider();

export { auth, googleProvider };