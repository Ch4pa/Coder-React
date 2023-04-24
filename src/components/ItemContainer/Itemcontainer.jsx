import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import ProductsList from '../ProductList/ProductsList'
import SpinnerLoading from '../Loading/Loading'


const Itemcontainer = ({ items, deleteItems }) => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000);
  }, [])

  if (loading) {
    return <SpinnerLoading />
  }
  return (
    <div>
      <Navbar />
      <div className='boxItems'>
        {items.map((item) => (
          <ProductsList item={item} key={item.id} deleteItems={deleteItems} />
        ))}
      </div>
    </div>
  )
}

export default Itemcontainer