import { useEffect, useState } from 'react'
import './App.css'
import Count from './components/Count'
import Itemcontainer from './components/ItemContainer/Itemcontainer'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [count, setCount] = useState(1);
  const [producto, setProducto] = useState({});

  useEffect(()=> {
    fetch(`https://fakestoreapi.com/products/${count}`)
    .then((res) => res.json())
    .then((res) => setProducto(res))
    .catch(err => console.log("error"+ err))
  },  [count]);

  /* console.log(producto); */
 
  return (
    <div className='container'>
      <Navbar/>
      <Count count={count} setCount= {setCount} />
      <img src={producto.image} alt={producto.title} className="ImgItemContainer"/>
      <h3>{producto.description}</h3>
      <Itemcontainer greeting="Hola Profeee"/>


    </div>
  )
}

export default App
