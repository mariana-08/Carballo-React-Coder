import React, {useContext, useState} from 'react'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore'
import { db } from '../service/firebase'
import { Link } from 'react-router-dom'

const Checkout = () => {
    const [buyer, setBuyer] = useState({})
    const [validateEmail, setValidateEmail] = useState('')
    const [orderId, setOrderId] = useState('')
    const {cart, clear,cartTotal } = useContext(CartContext) 

    const buyerData =(e) => {
        setBuyer(
            {  
                ...buyer,
                [e.target.name] : e.target.value
            } 
        )
    }

    const finalizarCompra = (e) => {
        e.preventDefault()
        //valido
        if(!buyer.name || !buyer.lastname || !buyer.email ){
            alert("Completa todos los campos")            
        }else if(buyer.email !== validateEmail){
            alert ("Los correos no coinciden")
        }else {
            let order ={
                comprador: buyer,
                compras: cart,
                total: cartTotal(),
                date: serverTimestamp()
            }
    
            const ventas = collection(db, "orders")
            //agregar un doc
            addDoc(ventas, order)
            .then ((res) =>{
                setOrderId(res.id)
                clear()
            }) 
            .catch ((error) => console.log(error))
        }
    }

    return (
        <div className='container mt-5'>
            {orderId ? (
                <div className='text-center'>
                <h2>Gracias por tu compra!</h2>
                <h3>Tu id de compra es: {orderId}</h3>
                <Link className="btn btn-primary mt-3" to="/">Volver al inicio</Link>
                </div>
            ) : (
            <div>
                <h2 className='text-center mb-4'>Completa con tus datos</h2>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <form onSubmit={finalizarCompra}>
                            <div className='mb-3'>
                                <label htmlFor='name' className='form-label'>Nombre</label>
                                <input type='text' className='form-control' name='name' onChange={buyerData} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='lastname' className='form-label'>Apellido</label>
                                <input type='text' className='form-control' name='lastname' onChange={buyerData} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='address' className='form-label'>Dirección</label>
                                <input type='text' className='form-control' name='address' onChange={buyerData} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='email' className='form-label'>Email</label>
                                <input type='email' className='form-control' name='email' onChange={buyerData} />
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='second-email' className='form-label'>Repetir Email</label>
                                <input type='email' className='form-control' name='second-email' onChange={(e) => setValidateEmail(e.target.value)} />
                            </div>
                            <div className='text-center'>
                                <button type='submit' className='btn btn-dark py-2 px-5'>Enviar</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            )}
        </div>
    )
}

export default Checkout
