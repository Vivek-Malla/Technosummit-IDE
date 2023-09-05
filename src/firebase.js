import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDog5xE5qus5vh1PCMExnlz-37aMVxx3fc",
  authDomain: "ide-technosummit.firebaseapp.com",
  projectId: "ide-technosummit",
  storageBucket: "ide-technosummit.appspot.com",
  messagingSenderId: "89921269803",
  appId: "1:89921269803:web:394a80370629f3f318fa6e"
});

var db = firebaseApp.firestore();

export { db };
