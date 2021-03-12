import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCV28_kRddxgNrG7Ur0pdoG3bAI0AVpP2o",
  authDomain: "clone-844aa.firebaseapp.com",
  projectId: "clone-844aa",
  storageBucket: "clone-844aa.appspot.com",
  messagingSenderId: "478538780156",
  appId: "1:478538780156:web:9875e699a778b80eb0f679",
  measurementId: "G-6ET7S4R12M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
