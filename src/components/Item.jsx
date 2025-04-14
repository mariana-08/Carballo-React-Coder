import React from 'react'

const Item = ({producto}) => {
  return (
    <div className='card' >
        <img className='card-img-top' src={producto.img} alt={producto.name} />
        <div className='card-body'>
            <h5 className='card-title'>{producto.name}</h5>
            <p className='card-text'>{producto.description}</p>
            <p className='card-text'>${producto.price}</p>
            <button className='btn btn-primary'>Ver más</button>
        </div>      
    </div>
  )
}

export default Item
