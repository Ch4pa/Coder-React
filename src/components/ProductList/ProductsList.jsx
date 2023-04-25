import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./index.css"

const ProductsList = ({ item, deleteItems,  }) => {

  /* const [buzos, setBuzos] = useState([])

  const getBuzo = () => { 
    if(window.location.includes("Buzos")){
     const buzos = item.product.filter((buzo)=> buzo.product("buzo")
      )
    }
    setBuzos(buzos)
  }

  useEffect(() => {
    getBuzo(buzos)
  }, [])
  
  console.log(buzos) */


  const addProducts = () =>{
    console.log("add")
  }
  return (
    
    
    <div className='itemBox' key={item.id}>
      <Link to={`${item.id}`} className='boxItems'>
        <div className='itemText'>
          <h2 className='itemsName'>{item.name}</h2>
          <img src={item.img} alt="" className='itemsImg' />
          <h4 className='itemPrice'>{item.price}</h4>
        </div>
      </Link >
       {/* <button className='itemButton' onClick={() => deleteItems(item.id)}>Delete</button> */} 
      <button className='itemButton' onClick={()=> addProducts()}>🛒</button>
    </div>
  )
}

export default ProductsList

