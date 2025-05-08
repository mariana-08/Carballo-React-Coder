import React, {useState} from 'react'


const Checkout = () => {
    const [buyer, setBuyer] = useState({})
    const [validateEmail, setValidateEmail ] = useState('')

    const buyerData =(e) => {
       setBuyer({
        
       })
    }

  return (
    <div className='container mt-5 d-flex justify-content-center'>
        <h2 className='text-center'>Completa con tus datos</h2>
        {/* <p className='text-center'>Recibirás un email con la confirmación de tu compra</p> */}
        <form className='w-100' style={{ maxWidth: '500px' }} onSubmit={} >
        <div className='mb-3'>
            <label htmlFor='name' className='form-label'>Nombre</label>
            <input type='text' className='form-control' id='name' name='name' />
        </div>
        <div className='mb-3'>
            <label htmlFor='lastname' className='form-label'>Apellido</label>
            <input type='text' className='form-control' id='lastname' name='lastname' />
        </div>
        <div className='mb-3'>
            <label htmlFor='address' className='form-label'>Dirección</label>
            <input type='text' className='form-control' id='address' name='address' />
        </div>
        <div className='mb-3'>
            <label htmlFor='email' className='form-label'>Email</label>
            <input type='email' className='form-control' id='email' name='email' />
        </div>
        <div className='mb-3'>
            <label htmlFor='second-email' className='form-label'>Repetir Email</label>
            <input type='email' className='form-control' id='second-email' name='second-email' />
        </div>
        <div className='d-grid'>
            <button type='submit' className='btn btn-primary'>Enviar</button>
        </div>
        </form>
    </div>
  )
}

export default Checkout
