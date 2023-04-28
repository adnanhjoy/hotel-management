// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsi9NFwt75aXWIKW1-kT8xZzKJSLsCltU",
  authDomain: "hotel-management-af567.firebaseapp.com",
  projectId: "hotel-management-af567",
  storageBucket: "hotel-management-af567.appspot.com",
  messagingSenderId: "865969953992",
  appId: "1:865969953992:web:b4b4d705191272fc7d19fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;