// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCfAsWC2PLLwucCY6YY6J6EQZZjiAUS20U",
  authDomain: "slack-clone-3be19.firebaseapp.com",
  projectId: "slack-clone-3be19",
  storageBucket: "slack-clone-3be19.appspot.com",
  messagingSenderId: "15434544346",
  appId: "1:15434544346:web:dad31bedf79310d8e9e1e3",
  measurementId: "G-1CNV2E3SV9",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()

export { auth, provider }
export default db
