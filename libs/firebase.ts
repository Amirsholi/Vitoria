
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyCktzZDbsHXFOKFJjoAsk_uCD7Yb7daJAI",
    authDomain: "farmaciavitoria.firebaseapp.com",
    projectId: "farmaciavitoria",
    storageBucket: "farmaciavitoria.appspot.com",
    messagingSenderId: "1078644241677",
    appId: "1:1078644241677:web:fabfe82736cf6ff7c0ac44"
  };

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

export default firebaseApp;
