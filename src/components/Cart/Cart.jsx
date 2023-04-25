import React from 'react'
import Navbar from '../Navbar/Navbar'
import "./index.css"

const Cart = () => {
  
  return (
    <div>
      <Navbar/>     
      <div className='cartDiv'>
        <p className='cartText'>Productos Comprados</p>
        
      </div>
    </div>
  )
}

export default Cart