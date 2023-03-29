import React from 'react'
import Count from '../Count'
import "./Itemcontainer.css"

const Itemcontainer = ({greeting}) => {
  
  return (
    <div className='divContainer'>
      <p>{greeting}</p>
      <div className='divCards'>
        <div className='card'>
          <div className='cardImg'>
            <img src="" alt="" />
          </div>
          <div className='cardText'>
            <p>Producto</p>
            <span>$5000</span>
          </div>
        </div>
        <div className='card'>
          <div className='cardImg'>
            <img src="" alt="" />
          </div>
          <div className='cardText'>
            <p>Producto</p>
            <span>$5000</span>
          </div>
        </div>
        <div className='card'>
          <div className='cardImg'>
            <img src="" alt="" />
          </div>
          <div className='cardText'>
            <p>Producto</p>
            <span>$5000</span>
          </div>
        </div>
        <div className='card'>
          <div className='cardImg'>
            <img src="" alt="" />
          </div>
          <div className='cardText'>
            <p>Producto</p>
            <span>$5000</span>
          </div>
        </div>
        <div className='card'>
          <div className='cardImg'>
            <img src="" alt="" />
          </div>
          <div className='cardText'>
            <p>Producto</p>
            <span>$5000</span>
          </div>
        </div>
        <div className='card'>
          <div className='cardImg'>
            <img src="" alt="" />
          </div>
          <div className='cardText'>
            <p>Producto</p>
            <span>$5000</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Itemcontainer