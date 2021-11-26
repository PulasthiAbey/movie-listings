import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC9od5JBZQFjqBg5qELnX4reMpB1WWRBSQ",
  authDomain: "movie-listing-app-9901d.firebaseapp.com",
  projectId: "movie-listing-app-9901d",
  storageBucket: "movie-listing-app-9901d.appspot.com",
  messagingSenderId: "712004938618",
  appId: "1:712004938618:web:7b677683a745a117fb84c3",
  measurementId: "G-FBCBXQ5QJG",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
