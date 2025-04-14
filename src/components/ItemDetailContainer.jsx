import React, { useEffect, useState } from 'react'
import { getOneProducts } from '../mock/AsyncService';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({});


    useEffect(() => {
        getOneProducts('01')
        .then((res) => setProductDetail(res))
        .catch((error) => console.log(error))
    }, [])


  return (
    <section>
       <ItemDetail productDetail={productDetail} />
    </section>
  )
}

export default ItemDetailContainer
