import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert2'

const CartView = () => {
    const {cart, removeItem, clear, cartTotal} = useContext (CartContext)
       
        const preConfirmar = () => {
            Swal.fire({
                title: '¿Estás seguro de que quieres vaciar el carrito?',   
                showDenyButton: true,
                denyButtonText: `No, no lo vacíes!`,               
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Sí, vaciar carrito!'
            }).then((result) => {
                if (result.isConfirmed) {
                  clear()
                  Swal.fire({
                    title:'Carrito vaciado!',
                    text:'Tu carrito ha sido vaciado.'
                  })
                }else {
                    Swal.fire({
                        title:'Cancelado',
                        text:'Tu carrito sigue igual.'
                    })
                }
            })
        }
        
        const eliminarProd = (id, name) => {
            removeItem(id)
            Swal.fire({
                position: 'center',
                title: `Eliminaste ${name} <br/>del carrito`,
                showCancelButton: false,
                timer: 1100,
                showConfirmButton: false,
                width: '30rem',
            })
        }
       
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
                            <p>Precio unidad: ${compra.price}</p>
                            <p>Precio final: ${compra.quantity * compra.price}</p>
                        </Col>
                        <Col className="d-flex justify-content-center align-items-center mb-3" sm={12} md={2}>
                        <button className="btn btn-danger" onClick={() => eliminarProd(compra.id, compra.name)}>Eliminar</button>
                        </Col>
                        <hr/>
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
                            <button className="btn btn-danger w-100" onClick={preConfirmar}>Vaciar carrito</button>
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

