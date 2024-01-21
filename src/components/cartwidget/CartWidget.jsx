import React, { useContext } from 'react'
import './cartwidget.css'
import { CartContext } from '../../context/CartContext'

const Widget = () => {

  const {cantidadEnCarrito} = useContext(CartContext);  
  return (
    <div className='carrito'>
        <i className="bi bi-cart4"></i>
        <p className='redCounter'>{cantidadEnCarrito()}</p>
    </div>
  )
}

export default Widget 