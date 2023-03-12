import React, { useContext, useEffect } from 'react'
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

          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">

              <div className="carousel-item active carrusel">
                <img src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1677594212/Happy%20Tails%20Spa%20App/image-33462-800_f511om.jpg" alt="baño-perro" className="d-block w-100" />
              </div>

              <div className="carousel-item carrusel">
                <img src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1677767477/Happy%20Tails%20Spa%20App/bath-kitty_pekqt6.png" alt="baño-gato" className="d-block w-100" />
              </div>

              <div className="carousel-item carrusel">
                <img src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1678310035/Happy%20Tails%20Spa%20App/how-often-to-bathe-a-puppy_tjwfau.jpg" alt="baño-perro" className="d-block w-100" />
              </div>

              <div className="carousel-item carrusel">
                <img src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1677540263/Happy%20Tails%20Spa%20App/a-cat-sleeping-on-a-massage-table-while-taking-spa-treatments_yvr61l.jpg" alt="spa-gato" className="d-block w-100" />
              </div>

              <div className="carousel-item carrusel">
                <img src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1678310035/Happy%20Tails%20Spa%20App/puppy-getting-a-bath_gnp4et.jpg" alt="spa-dog" className="d-block w-100" />
              </div>

              <div className="carousel-item carrusel">
                <img src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1678310345/Happy%20Tails%20Spa%20App/maxresdefault_mlm03r.jpg" alt="spa-cat" className="d-block w-100" />
              </div>


              <div className="bienvenidos text-uppercase">
                <h1 className='fw-bold'>¡Bienvenid@s!</h1>
              </div>
            </div>
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