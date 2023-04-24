import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import CardDetail from './components/CardDetail/CardDetail'
import Home from './components/Home/home';
import Itemcontainer from './components/ItemContainer/Itemcontainer';
import { ThemeContext } from './contexts/ThemeContext';
import db from '../db/firebase-config'
import { getDocs, collection, doc, deleteDoc } from 'firebase/firestore'
import About from './components/About/About'
import Cart from './components/Cart/Cart'


function App() {
  /* const [count, setCount] = useState(1);*/
  const [items, setItems] = useState([])

  /* Buscador */
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    /* console.log(input) */
    setInput("")
  }


  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(isDark)
  }


  const itemsRef = collection(db, "products")

  const getItems = async () => {
    const itemsCollection = await getDocs(itemsRef);
    const items = itemsCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    setItems(items);
  };

  useEffect(() => {
    getItems(items);

  }, []);

  const deleteItems = async (id) =>{
    const docRef = doc(db, "products", id);
    await deleteDoc(docRef)
    getItems()
  }
  /* Agregar Carrrito */



  /* const itemsCart = collection(db, "productsCart")

  const itemsAgregados = async () => {
    const itemsCollection = await getDocs(itemsCart);
    const itemsCartRef = itemsCollection.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    setItems(itemsCartRef);
  };

  useEffect(() => {
    itemsAgregados(itemsCartRef);

  }, []);

  const agregarItems = async (id) => {
    const docRef = doc(db, "productsCart");
    await getDocs(docRef);
  } */

  /* const agregarCarrito = async (id) =>{
    const docRef = doc(db, "productsCart", id);
    await deleteDoc(docRef)
    getItems()
  } */
 

  return (
    <div>
      <ThemeContext.Provider value={isDark}>
        <Routes toggleTheme={toggleTheme}>
          <Route path="/" element={<Navigate to="home"/>} />
          <Route path="/home" element={<Home handleInput={handleInput} handleSubmit={handleSubmit} 
          input={input} toggleTheme={toggleTheme} items={items} deleteItems={deleteItems} />} />
          <Route path="/products" element={<Itemcontainer  input={input} toggleTheme={toggleTheme} 
          items={items}  deleteItems={deleteItems} />} />
          <Route path="/products/:id" element={<CardDetail items={items}/>} />
          <Route path='/404' element={<h2>404</h2>} />
        </Routes>
      </ThemeContext.Provider>
    </div>

  )
}

export default App
