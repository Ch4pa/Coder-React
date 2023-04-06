import React from 'react'
import Navbar from '../Navbar/Navbar'
import ProductsList from '../ProductList/ProductsList'

const Itemcontainer = ({productos}) => {
  return (
    <div>
      <Navbar/>
      {productos.map(productos => ( 
        <ProductsList producto={productos} key={productos.id}/>
        ))} 
    </div>
  )
}

export default Itemcontainer