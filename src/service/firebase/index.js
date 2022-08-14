import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA3napunjFFNQcw1SIys05rSl-FKbPk7KQ",
    authDomain: "ecommerce-f8f4e.firebaseapp.com",
    projectId: "ecommerce-f8f4e",
    storageBucket: "ecommerce-f8f4e.appspot.com",
    messagingSenderId: "880859528622",
    appId: "1:880859528622:web:e1cc0141bd806dab86dc3f"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);