// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { signInWithPopup,getAuth,GoogleAuthProvider } from 'firebase/auth';
  

const firebaseConfig = {
  apiKey: "AIzaSyComIK2sHAniqfoZzQvVy0dJmDH1b_KBaM",
  authDomain: "build-linkedin-app.firebaseapp.com",
  projectId: "build-linkedin-app",
  storageBucket: "build-linkedin-app.appspot.com",
  messagingSenderId: "682101897660",
  appId: "1:682101897660:web:fb1f671cf1731f650753b9",
  measurementId: "G-YC1CN5KDZ9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth()
const provider = new GoogleAuthProvider();

export {auth,provider,signInWithPopup}

