import { Link } from "react-router-dom"
import logo from "../../assets/logo.jpg"
import CardWidget from '../CartWidget'

const Home = () => {
  return (
    <div>
    <nav className='nav'>
      <Link to="/home" className='divNav'>
        <img className='imgNav' src={logo} alt="Logo" />
      </Link>

      <ul className='ulNav'>
        <Link to="/home" className='liNav'>Home</Link>
        <Link to="/products" className='liNav'>Products</Link>
        <Link to="/about" className='liNav'>About</Link>
        <a href=""> <CardWidget /> 6</a>
      </ul>
    </nav>
    
    </div>

  )
}

export default Home