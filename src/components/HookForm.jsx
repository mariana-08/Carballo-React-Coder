import React, {useState, useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { addDoc, collection, doc, getDoc, serverTimestamp, updateDoc} from 'firebase/firestore'
import { db } from '../service/firebase'
import {Button} from 'react-bootstrap'

const HookForm = () => {
    const [orderId, setOrderId] = useState('')
    const [loading, setLoading] = useState(false)
    const {register, handleSubmit, formState:{errors}, getValues} = useForm()
    const {cart, clear, cartTotal} = useContext(CartContext)

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
            date: serverTimestamp()            
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
            {orderId ? (
                <div className='text-center'>
                <h2>Gracias por tu compra!</h2>
                <h3>Tu id de compra es: {orderId}</h3>
                <Link className="btn btn-primary mt-3" to="/">Volver al inicio</Link>
                {/* <p className='text-center'>Recibirás un email con la confirmación de tu compra</p> */}
                </div>
            ) : (
            <div>
                <h2 className='text-center mb-4'>Completa con tus datos</h2>
                <div className='row justify-content-center'>
                    <div className='col-md-6'>
                        <form onSubmit={handleSubmit(finalizarCompra)}>
                            <div className='mb-3'>
                                <label htmlFor='name' className='form-label'>Nombre</label>
                                <input type='text' className='form-control' name='name' {...register("name", {required:true, minLength:3})} />
                                {errors?.name?.type === "required" && <span style={{color:'red'}}>Por favor complete su nombre</span>}
                                {errors?.name?.type === "minLength" && <span style={{color:'red'}}>El nombre debe tener minimo 3 caracteres</span>}
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='lastname' className='form-label'>Apellido</label>
                                <input type='text' className='form-control' name='lastname' {...register("lastname", {required:true, minLength:3})}  />
                                {errors?.lastname?.type === "required" && <span style={{color:'red'}}>Por favor complete su apellido</span>}
                                {errors?.lastname?.type === "minLength" && <span style={{color:'red'}}>El apellido debe tener minimo 3 caracteres</span>}
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='address' className='form-label'>Dirección</label>
                                <input type='text' className='form-control' name='address' {...register("address", {required:true, minLength:2, maxLength:25})} />
                                {errors?.address?.type === "required" && <span style={{color:'red'}}>Por favor complete su dirección</span>}
                                {errors?.address?.type === "minLength" && <span style={{color:'red'}}>La dirección debe tener minimo 2 caracteres</span>}
                                {errors?.address?.type === "maxLength" && <span style={{color:'red'}}>La dirección debe tener maximo 25 caracteres</span>}
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='email' className='form-label'>Email</label>
                                <input type='email' className='form-control' name='email' {...register("email", {required:true})} />
                                {errors?.email?.type === "required" && <span style={{color:'red'}}>Por favor complete su email</span>}
                                {errors?.email?.type === "pattern" && <span style={{color:'red'}}>El email no es valido</span>}
                            </div>
                            <div className='mb-3'>
                                <label htmlFor='second-email' className='form-label'>Repetir Email</label>
                                <input type='email' className='form-control' name='second-email' {...register("secondemail", {required:true, validate:{equalsMails: mail2 => mail2 === getValues().email}})} />
                                {errors?.secondemail?.type === "required" && <span style={{color:'red'}}>Por favor repita su email</span>}
                                {errors?.secondemail?.type === "equalsMails" && <span style={{color:'red'}}>Los emails no coinciden</span>}
                            </div>
                            <div className='text-center'>
                                <Button variant="dark" disabled={loading} type='submit' className='btn btn-dark py-2 px-5'> {loading ? 'Finalizando...' : 'finalizar compra'} </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            )}
        </div>
    </div>
    )
}

export default HookForm