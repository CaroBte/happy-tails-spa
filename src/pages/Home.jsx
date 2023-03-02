import React from 'react'

const Home = () => {
  return (
    <>
      <div>Home</div>
      <div className="screen row gx-0">
        <div className='col-md-3'></div>

        <div className="carrusel">
          <img src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1677594212/Happy%20Tails%20Spa%20App/image-33462-800_f511om.jpg" alt="baño-perro" />
          <img src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1677767477/Happy%20Tails%20Spa%20App/cat_20getting_20bathed_20in_20a_20bath_20tub-DP.jpg_ccfhzx.jpg" alt="baño-gato" />
          <img src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1677594212/Happy%20Tails%20Spa%20App/how-often-should-you-wash-dog_qlsheo.jpg" alt="baño-perro" />
          <img src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1677767477/Happy%20Tails%20Spa%20App/bath-kitty_pekqt6.png" alt="baño-gato" />
          <img src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1677594211/Happy%20Tails%20Spa%20App/dog-wash_a9h7hc.jpg" alt="baño-perro" />
          <img src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1677540263/Happy%20Tails%20Spa%20App/a-cat-sleeping-on-a-massage-table-while-taking-spa-treatments_yvr61l.jpg" alt="spa-gato" />
        </div>

        <div className='col-md-3'>
          <div className='d-flex align-items-baseline mx-4 mt-4 mb-3 border-bottom'>
            <i className="fa-solid fa-bath user-icon h3"></i>
            <h5 className='mx-2'>Nuestros Servicios</h5>
          </div>
        </div>

        <div className='col-md-5'>
          <div className="serv_card mx-4 mb-5 ">
            <div className="serv-title">
              <h3>Básico Mascota Pequeña</h3>
            </div>

            <div className="serv_img">
              <img src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1677540264/Happy%20Tails%20Spa%20App/56-560788_4paws-mobile-dog-spa-and-mobile-cat-spa_r9ccfm.jpg" alt="photo" />
            </div>

            <div className="serv-info">
              <p>Precio: $55.000</p>
              <p>Incluye baño completo con shampoo, corte de uñas, limpieza de oídos y lavado de dientes.</p>
            </div>

            <div className="card-btns">
              <div className="input-group mas-menos">
                <button className="btn">+</button>
                <input disabled type="text" className="form-control" />
                <button className="btn">-</button>
              </div>

              <button className='btn add-cart'>
                <p><i className="fa-solid fa-paw h3"></i> Añadir al Carrito</p>
              </button>

            </div>

          </div>

        </div>
      </div>
    </>
  )
}

export default Home