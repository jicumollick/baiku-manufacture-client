// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB84RkMbXcSBOweKBrtUaL3reE6adpt1iQ",
  authDomain: "baiku-manufacture.firebaseapp.com",
  projectId: "baiku-manufacture",
  storageBucket: "baiku-manufacture.appspot.com",
  messagingSenderId: "158512585555",
  appId: "1:158512585555:web:4af794e4a01d85019f5fa6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
