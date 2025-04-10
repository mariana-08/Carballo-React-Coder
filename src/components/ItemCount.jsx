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
         <div>
           <button className='btn btn-danger' onClick= {substract}>-</button>
              <span className='mx-2 btn'>{count}</span>
              <button className='btn btn-success' onClick={add}>+</button>
        </div>
        <button className='btn btn-primary' onClick={comprar}>Agregar al carrito</button>      
    </div>
  )
}

export default ItemCount
