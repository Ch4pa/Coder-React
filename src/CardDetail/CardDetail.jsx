import React, { useEffect, useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import './CardDetail.css'


const CardDetail = ({}) => {
    const [producto, setProducto] = useState({});
    const [loading, setLoading] = useState(true)
    const { id } = useParams();

const getProductos = async()=>{
    try{
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProducto(data);
        setLoading(false);
    }
    catch(error){
        setProducto(null)
    }
}
useEffect(() => {
    getProductos()
}, [])

if(!producto){
    return <Navigate to="/404"/>
}
if (loading){
    return <h1>Loading...</h1>
}
return (
    <div>
        <Navbar />
        <div className='boxDetail'>
            <div className='BoxBorder'>
            <h1>{producto.title}</h1>
            <img src={producto.image} alt=""  width={250} height={250}/>
            <h1>{producto.price}</h1>
            <h4 className='cardText'>{producto.description}</h4>
            </div>
        </div>


    </div>
)

}

export default CardDetail