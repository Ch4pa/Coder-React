import { collection, addDoc } from "firebase/firestore";
import db from "../../db/firebase-config";

export const createItem = async (obj) => {
  const colRef = collection(db, "orders");
  const data = await addDoc(colRef, obj);
  return data.id;
};
