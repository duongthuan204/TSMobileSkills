// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6VGuXzMEV0gBQrtumfLALoQ5BsothJkA",
  authDomain: "daichuthien.firebaseapp.com",
  projectId: "daichuthien",
  storageBucket: "daichuthien.firebasestorage.app",
  messagingSenderId: "604389809632",
  appId: "1:604389809632:web:bef5bf2692f035ff011f85",
  measurementId: "G-MJKHV32KGG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);