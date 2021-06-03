import * as firebase from "firebase";
//import firebase from "firebase/app";

export const loginRequest = (email, password) =>
  firebase.auth().signInWithEmailAndPassword(email, password);

export const signUpRequest = (email, password) =>
  firebase.auth().createUserWithEmailAndPassword(email, password);

export const authStateChanged = (usr) =>
  firebase.auth().onAuthStateChanged(usr);

export const logOut = () => firebase.auth().signOut();
