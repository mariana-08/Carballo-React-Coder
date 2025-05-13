import { useState, useEffect,  } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import LoaderComponent from './LoaderComponent'
import {  collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../service/firebase'

const ItemListContainer = ({greeting}) => {
    const [data, setData] = useState([])
    const  [loader, setLoader] = useState(false)
    const {categoryId} = useParams()
    console.log(categoryId)

    useEffect(() => {
      setLoader(true)
      const productsCollection = categoryId ? query(collection(db, "productos"), where("category", "==", categoryId)) : collection(db, "productos")
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
    },[categoryId])   
    
    return(
        <section className='mt-5'>
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