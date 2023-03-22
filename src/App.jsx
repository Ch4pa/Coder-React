import './App.css'
import Itemcontainer from './components/ItemContainer/Itemcontainer'
import Navbar from './components/Navbar/Navbar'

function App() {

  return (
    <div className='container'>
      <Navbar/>
      <Itemcontainer greeting="Hola Profeee"/>
    </div>
  )
}

export default App
