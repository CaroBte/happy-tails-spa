import React, { useContext, useEffect, useState } from 'react'
import { Footer } from '../layout'
import { Servicios } from '../components'
import { serviciosContext } from '../context/servicios'

const Home = () => {

  const { traerServicios, servicios } = useContext(serviciosContext)

  useEffect(() => {
    traerServicios()
  }, [])

  return (
    <>
      <div className="screen row gx-0">
        <div className='col-md-3'></div>
        <div className="col-md-9 info-home">
          <div className="carrusel">
            <img className='w-50' src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1677594212/Happy%20Tails%20Spa%20App/image-33462-800_f511om.jpg" alt="baño-perro" />
            <img className='w-50' src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1677767477/Happy%20Tails%20Spa%20App/cat_20getting_20bathed_20in_20a_20bath_20tub-DP.jpg_ccfhzx.jpg" alt="baño-gato" />
            <img className='w-50' src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1677540263/Happy%20Tails%20Spa%20App/a-cat-sleeping-on-a-massage-table-while-taking-spa-treatments_yvr61l.jpg" alt="spa-gato" />
            <img className='w-50' src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1677540264/Happy%20Tails%20Spa%20App/56-560788_4paws-mobile-dog-spa-and-mobile-cat-spa_r9ccfm.jpg" alt="baño-perro" />
            {/*<img src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1677594212/Happy%20Tails%20Spa%20App/how-often-should-you-wash-dog_qlsheo.jpg" alt="baño-perro" />
            <img src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1677767477/Happy%20Tails%20Spa%20App/bath-kitty_pekqt6.png" alt="baño-gato" />
            <img src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1677594211/Happy%20Tails%20Spa%20App/dog-wash_a9h7hc.jpg" alt="baño-perro" /> */}
          </div>
          <h4 className='m-4 pb-3 border-bottom'><i className="fa-solid fa-bath user-icon"></i>  Nuestros Servicios</h4>
          <div className='container-cards d-flex flex-wrap justify-content-around'>
            <Servicios lista={servicios} />
          </div>
          
        </div>
      </div>
    </>
  )
}

export default Home