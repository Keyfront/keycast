import { initializeApp } from "firebase/app";
import { getDatabase, ref, set, onValue } from "firebase/database";

// Votre configuration Firebase
const firebaseConfig = {
  apiKey: "AIzaSyD8PxCxK9lMIwGDzUMgj9NNkmuT8-pqJkg",
  authDomain: "buzz-95789.firebaseapp.com",
  databaseURL: "https://buzz-95789-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "buzz-95789",
  storageBucket: "buzz-95789.appspot.com",
  messagingSenderId: "353855850728",
  appId: "1:353855850728:web:41295ed94e57160348e15d",
  measurementId: "G-EBWLXSM9PY"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export { database, ref, set, onValue };
