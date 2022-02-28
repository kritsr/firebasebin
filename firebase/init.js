// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.2/firebase-app.js";
// import { } from 'https://www.gstatic.com/firebasejs/9.1.2/firebase-SERVICE.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBWO9opcZRbNxEZtpBsOajfqYiOPKKaDfc",
  authDomain: "pastebin-d46e4.firebaseapp.com",
  projectId: "pastebin-d46e4",
  storageBucket: "pastebin-d46e4.appspot.com",
  messagingSenderId: "9493382512",
  appId: "1:9493382512:web:17418eaf11282692607bb5",
  databaseURL: "https://pastebin-d46e4-default-rtdb.asia-southeast1.firebasedatabase.app"
};

// Initialize Firebase
initializeApp(firebaseConfig);