import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import Count from './components/Count'
import Itemcontainer from './components/ItemContainer/Itemcontainer'
import Navbar from './components/Navbar/Navbar'
import ProductItem from './components/ProductItem/ProductsList'

function App() {
  const [count, setCount] = useState(1);
  const [productos, setProductos] = useState([]);


  const getProductos = async () => {
    try {
      const res = await axios("https://fakestoreapi.com/products");
      setProductos(res.data);
    } catch (error) {
      console.log("ERROR" + error)
    }
  };

  useEffect(() => {
    getProductos();

  }, [])

  console.log(productos);

  return (
    <div className='container'>
      <Navbar />
      <Count count={count} setCount={setCount} />
      {productos.map(producto => ( 
      <ProductItem producto={producto} key={producto.id}/>
      ))}
    </div>
  )
}

export default App
