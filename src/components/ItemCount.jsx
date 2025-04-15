import React, { useEffect, useState } from 'react'

const ItemCount = ({stock}) => {
    const [ count, setCount ] = useState(1);
    const [compra, setCompra] = useState(false);

    const add = () => {
        if (count < stock) {
            setCount(count + 1)
        }         
    }
    const substract = () => {
        if (count > 1) {
            setCount(count - 1)
        }
    }
    const comprar = () => {
        setCompra(!compra)
    }
       // a la escucha de un cambio en particular
    useEffect(() => {
        console.log('me ejecuto una sola vez y cada vez que cambie el stock')
    }, [compra])

  return (
    <div>
         <div className='d-flex align-items-center gap-2'>
           <button className='btn btn-menos px-3 py-2' onClick= {substract}>-</button>
              <span className='border px-3 py-2 rounded text-center '>{count}</span>
              <button className='btn btn-mas px-3 py-2' onClick={add}>+</button>
        </div>
        <button className='btn carrito px-4 py-2 mt-3' onClick={comprar}>Agregar al carrito</button>      
    </div>
  )
}

export default ItemCount
