import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ItemCount from './ItemCount'

const ItemDetail = ({productDetail}) => {
  return (
    <Container className='d-flex justify-content-center align-items-center vh-100'>             
          <div className='card w-75 p-3 shadow-lg border-0 rounded-3'>
            <Row>
              <Col className='d-flex justify-content-center align-items-center' sm={12} md={5}  >            
                <img className="w-100 h-auto" src={productDetail.img} alt={productDetail.name}/>
              </Col>
              <Col className='card-body' sm={12} md={7} >
                <h2 className='Tit-Detail'>{productDetail.name}</h2>
                <p>{productDetail.description}</p>
                <h3>Precio: ${productDetail.price}</h3>                
                <ItemCount stock={productDetail.stock} />    
              </Col>                           
            </Row>           
          </div>  
    </Container>
  )
}

export default ItemDetail
