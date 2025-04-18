import React from 'react'
import Item from './Item'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
