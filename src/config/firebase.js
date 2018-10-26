import * as firebase from "firebase";



const databaseRef = firebase.database().ref();
export const showsRef = databaseRef.child("shows");