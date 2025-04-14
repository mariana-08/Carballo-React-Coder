import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ItemCount from './ItemCount'

const ItemDetail = ({productDetail}) => {
  return (
    <Container>
      <Row>        
          <div className='card'>
            <Row>
              <Col className='imgDetail' sm={12} md={5} >            
                <img  src={productDetail.img} alt={productDetail.name} />
              </Col>
              <Col className='card-body' sm={12} md={7} >
                <h2 className='Tit-Detail'>{productDetail.name}</h2>
                <p>{productDetail.description}</p>
                <p>Precio: ${productDetail.price}</p>
                <p>Stock: {productDetail.stock}</p>
                <ItemCount stock={productDetail.stock} />    
              </Col>                           
            </Row>           
          </div>               
      </Row>       
    </Container>
  )
}

export default ItemDetail
