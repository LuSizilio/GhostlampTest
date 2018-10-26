import * as firebase from "firebase";
var config = {
    apiKey: "AIzaSyC7oSNS7N1PXFYlS69XBI0GHP0lwQJmLJQ",
    authDomain: "ghostlampstest-4346e.firebaseapp.com",
    databaseURL: "https://ghostlampstest-4346e.firebaseio.com",
    projectId: "ghostlampstest-4346e",
    storageBucket: "ghostlampstest-4346e.appspot.com",
    messagingSenderId: "890084251111"
  };
firebase.initializeApp(config);

export const firebase1 = firebase;

const databaseRef = firebase.database().ref();
export const showsRef = databaseRef.child("shows");