import {collection, addDoc } from "firebase/firestore";
import db from "./firebase-config.js";
import productos from "../productos.js";

const itemRef = collection(db, "products")

const promises = productos.map(product =>  addDoc(itemRef, product))

Promise.all(promises)
.then(() =>{
    console.log("done")
    process.exit(0)
})