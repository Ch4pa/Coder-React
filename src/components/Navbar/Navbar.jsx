import React, { useContext, useState } from 'react'
import logo from "../../assets/logo.jpg"
import "./Navbar.css"
import styles from "./Navbar.modules.css"
import CardWidget from '../CartWidget'
import { Link } from 'react-router-dom'
import Search from '../Search/Search'
import { ThemeContext } from '../../contexts/ThemeContext'

const Navbar = ({ ToggleTheme }) => {
  const value = useContext(ThemeContext)
  const [input, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setInput("")
    }
  return (
    <nav className={value ? styles.dark : styles.light}>
      <div className='navBox'>     
        <Link to="/home" className='divNav'>
          <img className='imgNav' src={logo} alt="Logo" />
        </Link>
        <div className="search">
        <Search />
        </div>
        <ul className='ulNav'>
          <Link to="/home" className='liNav'>Home</Link>
          <Link to="/products" className='liNav'>Remeras</Link>
          <Link to="/Buzos" className='liNav'>Buzos</Link>
          <Link to="/Cart"><CardWidget /></Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

