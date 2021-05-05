import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAaSKkesAlS3qz5B6qRDRsIYU0Po1BqsLk",
    authDomain: "todo-app-sumit-da632.firebaseapp.com",
    projectId: "todo-app-sumit-da632",
    storageBucket: "todo-app-sumit-da632.appspot.com",
    messagingSenderId: "976543112853",
    appId: "1:976543112853:web:eae51d72db4f3a2507859c",
    measurementId: "G-D8P834XFBC"
  });
  
  const db=firebaseApp.firestore();

  export default db;