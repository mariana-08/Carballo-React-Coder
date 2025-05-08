import React, { useContext, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ItemCount from './ItemCount'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'

const ItemDetail = ({productDetail}) => {
  const [compro, setCompro] = useState(false) 
  const {addToCart} = useContext(CartContext)
  const onAdd = (cantidad) => {
    addToCart (productDetail, cantidad)
    setCompro(true)
  }
    
  return (
    <Container className='d-flex justify-content-center align-items-center w-100 mt-5'>
      <div className='card w-75 p-3 shadow-lg border-0 rounded-3'>
        <Row>
          <Col className='d-flex justify-content-center align-items-center' sm={12} md={5}  >            
            <img className="w-100 h-auto" src={productDetail.img} alt={productDetail.name}/>
          </Col>
          <Col className='card-body' sm={12} md={7} >
            <h2 className='Tit-Detail'>{productDetail.name}</h2>
            <p>{productDetail.description}</p>
            <h3>${productDetail.price}</h3>
            {
              compro ? (
                <div className='mt-4  d-flex flex-column align-items-center'>   
                  <div style={{ maxWidth: '300px', width: '100%' }} className='w-100 d-grid gap-1'>
                    <Link className='btn btn-dark py-2' to='/Cart'>Ir al carrito</Link>                   
                    <Link className='btn btn-primary py-2 ' to='/'>Seguir comprando</Link> 
                  </div>                            
                </div>
              ) : (
                <ItemCount stock={productDetail.stock} onAdd={onAdd} />
              )
            }           
          </Col>               
        </Row>           
      </div>  
    </Container>
  )
}

export default ItemDetail
