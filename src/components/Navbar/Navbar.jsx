import React from 'react'
import logo from "../../assets/logo.jpg"
import Carritodecompras from "../../assets/Carritodecompras.png"
import "./Navbar.css"
import CardWidget from '../CartWidget'

const Navbar = () => {
  return (
    <nav className='nav'>
       <div className='divNav'>
        <img className='imgNav' src={logo} alt="Logo" />
        </div>
        
        <ul className='ulNav'>
            <a href="" className="aNav"><li className='liNav'>Home</li></a>
            <a href=""><li className='liNav'>Products</li></a>
            <a href=""><li className='liNav'>About</li></a>
            <a href=""> <CardWidget /> 6</a>
        </ul>
    </nav>
  )
}

export default Navbar