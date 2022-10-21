import { useState, useEffect } from 'react'
import { getProdutos } from '../../api/barbaros.api'

const ProductCard = () => {
  const[productos, setProductos] = useState([]);
  
  useEffect(() => {
    setProductos = getProdutos()
    console.log(productos)
  },[] )

  return (



    <div className="container w-full max-w-sm rounded-lg bg-red-600 shadow-md dark:bg-gray-800">
      <div className='underline'>Product card</div>
    </div>
  )
}

export default ProductCard