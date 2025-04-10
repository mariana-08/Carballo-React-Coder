import React from 'react'
import ItemCount from './ItemCount'


const ItemDetail = ({productDetail}) => {
  return (
    <div>
        <h2>Vino:</h2>
        <p>{productDetail.name}</p>
        <img src={productDetail.img} alt={productDetail.name} />
        <p>{productDetail.description}</p>
        <p>Precio: ${productDetail.price}</p>
        <p>Stock: {productDetail.stock}</p>
        <ItemCount stock={productDetail.stock} />
    </div>
  )
}

export default ItemDetail
