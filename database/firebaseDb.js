// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvnps-YwN0R_z5eYDVY8zKOp2yWG9nFQE",
  authDomain: "react-native-crud-1fa74.firebaseapp.com",
  projectId: "react-native-crud-1fa74",
  storageBucket: "react-native-crud-1fa74.appspot.com",
  messagingSenderId: "813448679406",
  appId: "1:813448679406:web:b9f4917841c8d1d17088ff",
  measurementId: "G-F7FKB19ZK8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firebase = getAnalytics(app);

export default firebase