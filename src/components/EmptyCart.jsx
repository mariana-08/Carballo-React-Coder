import React from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom'

const EmptyCart = () => {
  return (
    <Container className="d-flex justify-content-center align-items-center min-vh-100">
    <Row className="w-100 justify-content-center">
      <Col md={8} lg={6}>
        <div className="empty-cart-wrapper p-4 shadow-lg rounded text-center"> 
          <h1 className="mb-3 animate__animated animate__fadeIn">Tu carrito está vacío</h1>
          <p className="mb-4 animate__animated animate__fadeIn animate__delay-1s">Te invitamos a seguir mirando productos.</p>
          <Link to="/" className="btn btn-primary px-4 animate__animated animate__fadeIn animate__delay-2s">Volver al inicio</Link>
        </div>
      </Col>
    </Row>
  </Container>
    
  )
}

export default EmptyCart


// <div>
//       <h1>Tu carrito está vacío</h1>
//       <p>Te invitamos a ver más productos.</p>      
//       <Link to='/' className='btn btn-primary'>Volver a inicio</Link>

//     </div>