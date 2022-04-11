// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmOGJ0qdbTbuICrFMWBD-ohr8jO8iOmto",
  authDomain: "white-space-hotel.firebaseapp.com",
  projectId: "white-space-hotel",
  storageBucket: "white-space-hotel.appspot.com",
  messagingSenderId: "313001595818",
  appId: "1:313001595818:web:11f875d7e38513d4bb11d3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
