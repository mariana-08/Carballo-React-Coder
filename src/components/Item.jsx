import React from 'react'
import { Link } from 'react-router-dom';

const Item = ({producto}) => {
  return (
    <div className='card' >
        <img className='card-img-top' src={producto.img} alt={producto.name} />
        <div className='card-body'>
            <h5 className='card-title'>{producto.name}</h5>
            <p className='card-text'>{producto.description}</p>
            <p className='card-text'>${producto.price}</p>
            <div>
              <Link className='btn btn-ver-mas mx-2 my-2' to={`/item/${producto.id}`}>Ver más</Link>
            </div>  
        </div>      
    </div>
  )
}

export default Item
