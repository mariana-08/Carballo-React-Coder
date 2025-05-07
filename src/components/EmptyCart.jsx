import React from 'react'
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <div>
      <h1>Tu carrito está vacío</h1>
      <p>Te invitamos a ver más productos.</p>      
      <Link to='/' className='btn btn-primary'>Volver a inicio</Link>

    </div>
  )
}

export default EmptyCart
