// src/firebase.js
import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyCLVYPVb1cie0uemEBi7PZfF5s-T6t-3c0",
    authDomain: "notifications-test-5e846.firebaseapp.com",
    databaseURL: "https://notifications-test-5e846.firebaseio.com",
    projectId: "notifications-test-5e846",
    storageBucket: "notifications-test-5e846.appspot.com",
    messagingSenderId: "194034487031"
  };
firebase.initializeApp(config);
export default firebase;
