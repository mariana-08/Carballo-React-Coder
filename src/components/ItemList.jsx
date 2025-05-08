import React from 'react'
import Item from './Item'
import { Col, Container, Row } from 'react-bootstrap'


const ItemList = ({data}) => {
  return (    
        <Container className="my-4" >
          <Row>
            {data.map((producto) => (
              <Col key={producto.id} className='mb-4' xs={12} sm={6} md={4} lg={3}>
                <Item producto={producto} />
              </Col>
            ))}
          </Row>
        </Container>
   
 
   
  )
}

export default ItemList
