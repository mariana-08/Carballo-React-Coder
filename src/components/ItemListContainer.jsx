import {getProducts} from '../mock/AsyncService'
import { useState, useEffect } from 'react'
import ItemList from './ItemList'
import { useParams } from 'react-router-dom'

const ItemListContainer = ({greeting}) => {
    const [data, setData] = useState([])
    const  [loader, setLoader] = useState(false)
    const {categoryId} = useParams()
    console.log(categoryId)

    useEffect(() => {
      setLoader(true)
      getProducts(categoryId)
      .then((res) =>{
        if(categoryId){
          setData(res.filter((prod) => prod.category === categoryId))
        }else{
          setData(res)
        }
      })        
      .catch((error) => console.log(error))
      .finally(() => setLoader(false))
    }, [categoryId])
    
    return(
        <section className='mt-5'>
          <div className='d-flex justify-content-center'>
          {
            loader ? <h2 className='text-center'>Cargando...</h2>
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