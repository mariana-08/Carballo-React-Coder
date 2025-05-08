// import {getProducts, products } from '../mock/AsyncService'
import { products } from '../mock/AsyncService'
import { useState, useEffect,  } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemListContainer = ({greeting}) => {
    const [data, setData] = useState([])
    const  [loader, setLoader] = useState(false)
    const {categoryId} = useParams()
    console.log(categoryId)

    //CONEXION A FIREBASE
    useEffect(() => {
      setLoader(true)
      const productsCollection = collection(db, "productos")
      getDocs (productsCollection)
      .then((res) => {
        const list = res.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data()                      
          }
        })
        setData(list)
      })
      .catch((error) => console.log(error))
      .finally(() => setLoader(false))
    },[])

    // solo para subir los prod a firebase
  const subirData =() => {
    console.log('subiendo data ')
    const collectionToAdd = collection(db, "productos")
      products.map((item) => addDoc(collectionToAdd, item))
  }
    
    return(
        <section className='mt-5'>

          {/* //unicamente para subir los productos a firebase, no se usa en la app */}
          <button onClick={subirData} className='btn btn-primary'>Subir productos</button>



          <div className='d-flex justify-content-center'>
          {
            loader ? <LoaderComponent/>
            :<div>
               <h1>{greeting} {categoryId && <span style={{textTransform:'capitalize'}}>{categoryId}</span>}</h1>
            <ItemList data={data}/>
            </div>
          }     
          </div>    
        </section>
    )
}

export default ItemListContainer