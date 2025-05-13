import React from 'react';

const Nosotros = () => {
  return (
    <div className='container mt-5'>
      <div className='row align-items-center'>
        <div className='col-md-6'>
          <img src='/nosotros.jpg' alt='Vinos Punilla' className='img-fluid rounded' />
        </div>
        <div className='col-md-6'>
          <h2>Nosotros</h2>
          <p>
            Somos Vinos Punilla, una vinoteca y distribuidora nueva que trabaja únicamente con bodegas de Córdoba.
            Este proyecto nace con la propuesta de ser una vinoteca diferente cuyo principal objetivo es revolucionar 
            el mercado vitivinícola dentro de la provincia.
          </p>
          <p>
            Luego de realizar un estudio de mercado, nos encontramos con que la mayoría de los vinos instalados 
            en esta región son mendocinos. Nuestro objetivo es promover el consumo interno dentro de la provincia 
            y dar a conocer las fincas y bodegas de Córdoba, que le dan a estos vinos una identidad tan particular.
          </p>
          <p>
            Nuestras principales ofertas provienen de bodegas ubicadas en Traslasierra, Colonia Caroya 
            y el Valle de Calamuchita.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;