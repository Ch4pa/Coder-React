import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBfCsnbClTRMhOb2PEmgsGejhcZOg2ZSV0",
    authDomain: "e-commerce-28d3e.firebaseapp.com",
    projectId: "e-commerce-28d3e",
    storageBucket: "e-commerce-28d3e.appspot.com",
    messagingSenderId: "115567120905",
    appId: "1:115567120905:web:26701c00185fc1b27dded8"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;