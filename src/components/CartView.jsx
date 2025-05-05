import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const CartView = () => {
    const {cart, removeItem, clear} = useContext (CartContext) 
  return (
    <div>
        <h1>Tu carrito tiene:</h1>
        <div className='d-flex flex-wrap justify-content-center align-items-center'>
            {cart.map((compra) => (
                <div key={compra.id}>
                    <div className='card w-25 m-3 p-3 shadow-lg border-0 rounded-3'>
                        <img className="w-100 h-auto" src={compra.img} alt={compra.name}/>
                        <h3>{compra.name}</h3>
                        <p>Cantidad: {compra.quantity}</p>
                        <p>${compra.price}</p>
                        <p>Subtotal: ${compra.quantity * compra.price}</p>
                        <button className='btn btn-danger' onClick={() => removeItem(compra.id)} > X Eliminar</button>  
                    </div> 
                    <p>Total a pagar:</p>
                    <button className='btn btn-dark' onClick={clear}>Borrar carrito</button>
                    <button className='btn btn-dark' >Terminar compra</button>                    
                    <Link className='btn btn-primary' to='/'>Seguir comprando</Link>                   
                </div>
            ))}
        </div>
    </div>
  )
}

export default CartView