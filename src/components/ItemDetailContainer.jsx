import React, { useEffect, useState } from 'react'
import { getOneProducts } from '../mock/AsyncService';
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import LoaderComponent from './LoaderComponent';

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({});
    const [loading, setLoading] = useState(false);   
    const {itemId}=useParams()
    console.log(itemId)

    useEffect(() => {
        setLoading(true)
        getOneProducts(itemId)
        .then((res) => setProductDetail(res))
        .catch((error) => console.log(error)) 
        .finally(() => setLoading(false))  
    },[itemId])

  return (
    <section>
      {loading ? <LoaderComponent/> : <ItemDetail productDetail={productDetail}/>}
   </section>
  )
}

export default ItemDetailContainer