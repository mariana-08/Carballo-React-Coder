import React from 'react'
import { DotLoader } from 'react-spinners'

const LoaderComponent = () => {
  return (
    <div className='d-flex justify-content-center align-items-center vh-100'>
      <DotLoader color='#701030' />
    </div>
  )
}

export default LoaderComponent
