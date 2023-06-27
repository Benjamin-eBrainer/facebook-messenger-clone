import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAuChUdj1kZorNxU_pBWXe4fXxncGJSrlE",
    authDomain: "facebook-messenger-clone-7bdd7.firebaseapp.com",
    projectId: "facebook-messenger-clone-7bdd7",
    storageBucket: "facebook-messenger-clone-7bdd7.appspot.com",
    messagingSenderId: "808601046880",
    appId: "1:808601046880:web:1e5ec480b041f404a0d805",
    measurementId: "G-9MCMVMP6DZ"
};

initializeApp(firebaseConfig)
const db = getFirestore();

export default db;