import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CartView = () => {
    const {cart, removeItem, clear} = useContext (CartContext) 
  return (
    <Container className='d-flex justify-content-center align-items-center   mt-5'>       
        <div className= 'card w-75  p-1  border-1 rounded-3'>
            {cart.map((compra) => (               
                <Row key ={compra.id} className=" product-row  p-2">   
                     <Col className='d-flex justify-content-center align-items-center' sm={12} md={4}  > 
                        <img className='w-100 h-auto' src={compra.img} alt={compra.name} /> 
                    </Col>
                    <Col className='card-body' sm={12}  md ={6} >
                    <h2 className='Tit-Detail'>{compra.name}</h2>
                    <p>Cantidad: {compra.quantity}</p>
                    <p>Precio: ${compra.price}</p>                    
                    <p>Precio final: ${compra.quantity * compra.price }</p>                   
                    <p>Disponibles: </p>
                    </Col>
                    <Col className=' d-flex justify-content-center align-items-center ' sm={12} md={2}>
                    <button className='btn btn-danger' onClick={() => removeItem(compra.id)}>Eliminar</button>                     
                    </Col>
                    <hr></hr>                                     
                </Row>                
            ))}
            <Row>
                <div className='w-50'>
                    <button className='btn btn-danger' onClick={clear}>Vaciar carrito</button>
                    </div>
                    <div className='w-50'>
                        <Link className='btn btn-primary py-2' to='/'>Seguir comprando</Link>
                </div>
            </Row>       
               

        </div>
        <div className='card w-25 border-1 rounded-3 p-3 m-4 '>
            <h4>Total a pagar : $</h4>
            <div>
            <Link className='btn btn-dark py-2' to='/checkout'>Finalizar compra</Link>
            </div>
        </div>
        
        
    </Container>
  )
}

export default CartView



// <h3>Total a pagar : ${compra.price * compra.quantity}</h3>                      
//                         <button className='btn btn-danger' onClick={clear}>Vaciar carrito</button>
//                         <Link className='btn btn-primary' to='/checkout'>Finalizar compra</Link>
//                         <Link className='btn btn-primary' to='/'>Seguir comprando</Link>