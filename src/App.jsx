import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import CardDetail from './CardDetail/CardDetail'
import Count from './components/Count'
import Home from './components/Home/home'
import Itemcontainer from './components/ItemContainer/Itemcontainer'
import Navbar from './components/Navbar/Navbar'


function App() {
  const [count, setCount] = useState(1);
  const [productos, setProductos] = useState([]);


  const getProductos = async () => {
    try {
      const { data } = await axios("https://fakestoreapi.com/products");
      setProductos(data);
    } catch (error) {
      console.log("ERROR" + error)
    }
  };

  useEffect(() => {
    getProductos();

  }, [])

  return (
    <div>
      <Routes>
      <Route path="/" element={ <Navigate to="home"/>}/>
      <Route path="/home" element={ <Home />}/>
      <Route path="/products" element={<Itemcontainer productos={productos}/>}/>
      <Route path="/products/:id" element={<CardDetail/>}/>
      <Route path='/404' element={<h2>404</h2>}/>
      </Routes>
      <h1>Bienvenido a Nuestra Pagina</h1>
      </div>
    
  )
}

export default App
