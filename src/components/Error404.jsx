import React from 'react'

const Error404 = () => {
  return ( 
    <section >
      <div className='container d-flex flex-column justify-content-center align-items-center mt-3'>           
        <h1 className='text-error'>ERROR 404</h1>
        <h2 className='text-error'>Página no encontrada</h2>       
        <p className='text-error'>Por favor, verifica la URL o vuelve a la página de inicio.</p>  
        <img src="../error2.png" alt="error" className='img-error'/> 
      </div>
    </section>
  )
}

export default Error404
