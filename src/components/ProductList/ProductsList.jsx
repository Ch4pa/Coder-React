import React from 'react'
import { Link } from 'react-router-dom'

const ProductsList = ({producto}) => {
  return (
    <Link to={`${producto.id}`}>
    <div>
       <div style={ {display:"flex", flexDirection:"column",alignItems:"center", height:"auto", width:"1280px"}}>
        <h3>{producto.title}</h3>
        <img src={producto.image} alt=""  width={350} height={350}/>
        <h4>{producto.description}</h4>
      </div>
        
      </div>
      </Link>
  )
}

export default ProductsList

