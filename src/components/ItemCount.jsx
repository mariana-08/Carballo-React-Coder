import React, {useState} from 'react'
import { Link } from 'react-router-dom'

const ItemCount = ({stock, onAdd}) => {
  const [count, setCount] = useState(1)    
  const add =() => {
    if(count < stock){
      setCount(count + 1)
    }
  }
  const substract =() => {
    if(count > 0){
      setCount(count - 1)
    }
  }      
  const comprar = () => {
    onAdd(count)
  }    
  return (
    <div>
         <div className=' mt-3 mb-2'>
          <p className='text-muted'>Stock disponible: {stock}</p>
        </div>
        <div className='d-flex  justify-content-center align-items-center gap-2'>
            <button className='btn btn-menos px-3 py-2' onClick= {substract}>-</button>
            <span className='border px-3 py-2 rounded text-center '>{count}</span>
            <button className='btn btn-mas px-3 py-2' onClick={add}>+</button>
        </div>        
        <div className='mt-3 d-flex flex-column align-items-center'>
          <div style={{ maxWidth: '300px', width: '100%' }} className='w-100 d-grid gap-2'>
            <button className=' carrito py-2 w-100' onClick={comprar}>
              Agregar al carrito
            </button>
            <Link className='btn btn-primary py-2 w-100' to='/'>
              Volver al inicio
            </Link>
          </div>
        </div> 
    </div>
  )
}

export default ItemCount
