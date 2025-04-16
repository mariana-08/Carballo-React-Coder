import React, { useEffect, useState } from 'react'
import { getOneProducts } from '../mock/AsyncService';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({});
    const {itemId}=useParams()
    console.log(itemId)

    useEffect(() => {
        getOneProducts(itemId)
        .then((res) => setProductDetail(res))
        .catch((error) => console.log(error))        
    },[itemId])

  return (
    <section>
      <ItemDetail productDetail={productDetail} />
    </section>
  )
}

export default ItemDetailContainer
