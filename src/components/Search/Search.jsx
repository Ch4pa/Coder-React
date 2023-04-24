import { useState } from 'react'
import "./index.css"
const Search = () => {

    /* Buscador */
    const [input, setInput] = useState("");

    const handleInput = (e) => {
        setInput(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setInput("")
    }


    return (
        <form onSubmit={handleSubmit} className='search'>

            <input
                type="text"
                placeholder='Buscador'
                onChange={handleInput}
                value={input}
                className='searchInput' />
                
        </form>
    )
}

export default Search