import React, { useEffect, useState } from 'react'
// import { getOneProducts } from '../mock/AsyncService';
import ItemDetail from './ItemDetail';
import { Link, useParams } from 'react-router-dom';
import LoaderComponent from './LoaderComponent';
import {  doc, getDoc } from 'firebase/firestore';
import { db } from '../service/firebase';

const ItemDetailContainer = () => {
    const [productDetail, setProductDetail] = useState({});
    const [invalid, setInvalid ] = useState(null);
    const [loading, setLoading] = useState(false);   
    const {itemId}=useParams()
    console.log(itemId)

    useEffect(() => {
      setLoading(true)
     

      const docRef = doc(db, "productos", itemId)

      getDoc(docRef)
      .then((res) => {
        if(res.data()){
          setProductDetail({id: res.id, ...res.data()})
        }else {
          setInvalid(true)
        }
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
    }, [ itemId ])   

       
      if(invalid) {
        return (
          <div className='d-flex flex-column align-items-center justify-content-center mt-5'>
            <h2 className='text-center mb-4'>Lo sentimos, ese producto no existe</h2>
            <Link to='/' className='btn btn-primary px-4 py-2'>Volver al inicio</Link>
          </div>       
        )
      }

  return (
    <section>
      {loading ? <LoaderComponent/> : <ItemDetail productDetail={productDetail}/>}
   </section>
  )
}

export default ItemDetailContainer