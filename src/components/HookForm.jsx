import React, {useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { addDoc, collection,  serverTimestamp, } from 'firebase/firestore'
import { db } from '../service/firebase'
import {Button} from 'react-bootstrap'

const HookForm = () => {
    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const {register, handleSubmit, formState:{errors}, getValues} = useForm()
    const {cart, cartTotal, clear} = useContext(CartContext)

    const finalizarCompra = (dataDelForm) => {
        setLoading (true)
        let order ={
            Comprador: {
                name: dataDelForm.name,
                lastname: dataDelForm.lastname,
                address: dataDelForm.address,
                email: dataDelForm.email,
            },
            Compras: cart,
            total: cartTotal(),
            fecha: serverTimestamp()            
        }

        const ventas = collection(db, "orders")
        addDoc(ventas, order)   
        .then((res)=> {
            setOrderId (res.id)
            clear()
        })
        .catch((error) => console.log(error))
        .finally(() => {setLoading(false)})
    }

    return (
    <div>
        <div className='container mt-5'>
            {
                orderId ? 
                    <div className='text-center'>
                    <h2>Gracias por tu compra!</h2>
                    <h3>Tu id de compra es: {orderId}</h3>
                    <Link className="btn btn-primary mt-3" to="/">Volver al inicio</Link>                
                    </div>
                : 
                <div>
                    <h2 className='text-center mb-4'>Completa con tus datos</h2>
                    <div className='row justify-content-center'>
                        <div className='col-md-6'>
                            <form onSubmit={handleSubmit(finalizarCompra)}>
                                <div className='mb-3'>
                                    <label className='form-label'>Nombre</label>
                                    <input className='form-control' type='text' name='name' {...register("name", {required:true, minLength:3})} />
                                    {errors?.name?.type === "required" && <span style={{color:'red'}}>Por favor complete el campo Nombre</span>}
                                    {errors?.name?.type === "minLength" && <span style={{color:'red'}}>El nombre debe contener minimo 3 caracteres</span>}
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Apellido</label>
                                    <input className='form-control' type='text' name='lastname' {...register("lastname", {required:true, minLength:2})}  />
                                    {errors?.lastname?.type === "required" && <span style={{color:'red'}}>Por favor complete el campo Apellido</span>}
                                    {errors?.lastname?.type === "minLength" && <span style={{color:'red'}}>El apellido debe contener minimo 2 caracteres</span>}
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Dirección</label>
                                    <input className='form-control' type='text' name='address' {...register("address", {required:true, minLength:4, maxLength:25})} />
                                    {errors?.address?.type === "required" && <span style={{color:'red'}}>Por favor complete el campo su dirección</span>}
                                    {errors?.address?.type === "minLength" && <span style={{color:'red'}}>La dirección debe contener minimo 10 caracteres</span>}
                                    {errors?.address?.type === "maxLength" && <span style={{color:'red'}}>La dirección es demasiado larga</span>}
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Email</label>
                                    <input className='form-control' type='email' name='email' {...register("email", {required:true,  })} />
                                    {errors?.email?.type === "required" && <span style={{color:'red'}}>Por favor complete su email</span>}
                                </div>
                                <div className='mb-3'>
                                    <label className='form-label'>Repetir Email</label>
                                    <input className='form-control' type='email' name='second-email' {...register("secondemail", {required:true, validate:{igualMails: mail2 => mail2 === getValues().email}})} />
                                    {errors?.secondemail?.type === "required" && <span style={{color:'red'}}>Por favor repita su email</span>}
                                    {errors?.secondemail?.type === "equalsMails" && <span style={{color:'red'}}>Los emails no coinciden</span> }
                                </div>
                                <div className='text-center'>
                                    <Button  disabled={loading} type='submit' className='btn btn-dark py-2 px-5'> {loading ? 'Finalizando...' : 'finalizar compra'} </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            }
        </div>
    </div>
    )
}

export default HookForm