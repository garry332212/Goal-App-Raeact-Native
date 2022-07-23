import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDG60PFGUNL8QEcrGNitZscGwmyAoyoZRA",
  authDomain: "todo-app-12829.firebaseapp.com",
  projectId: "todo-app-12829",
  storageBucket: "todo-app-12829.appspot.com",
  messagingSenderId: "389766124401",
  appId: "1:389766124401:web:bc73e33fb14f5278f51cd0",
  measurementId: "G-SB998YT8Z0",
};

const firebaseApp = initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

export { db, auth };
