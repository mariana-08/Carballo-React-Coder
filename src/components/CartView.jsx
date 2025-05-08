import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CartView = () => {
    const {cart, removeItem, clear, cartTotal} = useContext (CartContext) 
  return (
<Container className="mt-5 mb-3">
    <Row>   
        <Col lg={8} sm={12}>
            <div className="card p-1 border-1 rounded-3">
                {cart.map((compra) => (
                <Row key={compra.id} className="product-row p-2">
                    <Col className="d-flex justify-content-center align-items-center" sm={12} md={4}>
                        <img className="w-75 h-auto mb-2" src={compra.img} alt={compra.name} />
                    </Col>
                    <Col className="card-body" sm={12} md={6}>
                        <h2 className="Tit-Detail">{compra.name}</h2>
                        <p>Cantidad: {compra.quantity}</p>
                        <p>Precio: ${compra.price}</p>
                        <p>Precio final: ${compra.quantity * compra.price}</p>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center mb-3" sm={12} md={2}>
                    <button className="btn btn-danger" onClick={() => removeItem(compra.id)}>Eliminar</button>
                    </Col>
                    <hr />
                </Row>
                ))}
            </div>
        </Col>
        <Col lg={4} sm={12}>
            <div className="sticky-summary card border-1 rounded-3 p-3 mt-4 mb-3 gap-2 ">
                <h4>Total a pagar: ${cartTotal()}</h4>
                <div>
                <Link to='/checkout' className="btn btn-dark py-2 w-100 mb-2" >Finalizar compra</Link>
                </div>
                <Row>
                    <Col xs={6}>
                        <button className="btn btn-danger w-100" onClick={clear}>Vaciar carrito</button>
                    </Col>
                    <Col xs={6}>
                        <Link className="btn btn-primary w-100" to="/">Seguir comprando</Link>
                    </Col>
                </Row>
            </div>
        </Col>
    </Row>
</Container>  
  )
}
export default CartView

