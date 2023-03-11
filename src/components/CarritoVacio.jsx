import React from 'react'

const CarritoVacio = () => {
  return (
    <div className='mb-5 d-flex flex-column align-items-center'>
      <h1 className='mt-5 h3 text-center'>Aún no tienes Servicios en tu Carrito</h1>
      <h1 className='mb-5 h5 text-center'>Vuelve al Home para buscar nuestros Servicios</h1>
      <img className='rounded-5 w-50' src="https://res.cloudinary.com/dwm5krz7f/image/upload/v1677795923/Happy%20Tails%20Spa/28597f58dce60678af724923654b14d7_nss3cw.png" alt="pets" />
    </div>
  )
}

export default CarritoVacio