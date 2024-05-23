// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCzeS0gmMWe_p-N2XhjfhhLslJ2uuZEXkU",
  authDomain: "taskbidhub.firebaseapp.com",
  databaseURL: "https://taskbidhub-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "taskbidhub",
  storageBucket: "taskbidhub.appspot.com",
  messagingSenderId: "245042801496",
  appId: "1:245042801496:web:ab5f6fa57ad8756a65132d",
  measurementId: "G-2KMVN7JJRL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export  const analytics = getAnalytics(app);
export const db=getFirestore(app);