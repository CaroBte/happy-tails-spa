import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { servicios } from '../context'


const MenuBurger = () => {

  const { ordenes } = useContext(servicios.serviciosContext)

  const body = document.querySelector("body")

  const handleTema = () => {

    const navBurguer = document.querySelector('.menuBurger')
    const footer = document.querySelector('#footer')

    body.classList.toggle('dark')
    navBurguer.classList.toggle('dark')
    footer.classList.toggle('dark')
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg d-flex cont_nav">
        <div className="container-fluid d-flex ">
          <Link className='text-decoration-none' to={"/"}>
            <h1 className='navbar-brand h1_title'>Happy Tails Spa</h1>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <i className="fa-solid fa-bars burger_icon position-relative">
              {
                ordenes.length > 0 && (
                  <span className="position-absolute top-0 start-75 translate-middle p-1 border border-light rounded-circle notification"></span>
                )
              }
            </i>
          </button>

          <div
            className="offcanvas offcanvas-start menuBurger"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >

            <div className="offcanvas-body menu_body d-flex md-flex-column">
              <div className="offcanvas-header d-flex align-items-start">
                <button
                  type="button"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close">
                  <i className="fa-solid fa-circle-xmark h3 x_icon"></i>
                </button>
              </div>

              <div className="navbar-nav div_ppal d-flex flex-column" id='offcanvasNavbar'>

                <div className="list_one d-flex flex-column">

                  <Link to={"/buscar"} className="nav-item mx-3">
                    <i className="fa-solid fa-magnifying-glass h3"></i>
                    Buscar
                  </Link>

                  <Link to={"/"} className="nav-item mx-3">
                    <i className="fa-solid fa-house-chimney-user h3"></i>
                    Inicio
                  </Link>

                  <Link to={"/carrito"} className="nav-item mx-3">
                    <i className="fa-solid fa-cart-shopping h3 position-relative">
                      {
                        ordenes.length > 0 && (
                          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill">
                            {ordenes.length}
                          </span>
                        )
                      }
                    </i>
                    Carrito
                  </Link>

                  <Link to={"/nosotros"} className="nav-item mx-3">
                    <i className="fa-solid fa-paw h3"></i>
                    Nosotros
                  </Link>

                  <Link to={"/perfil"} className="nav-item mx-3">
                    <i className="fa-solid fa-user h3"></i>
                    Perfil
                  </Link>
                </div>

                <div className="list_two d-flex flex-column">
                  <div className="nav-item mx-3 tema_cel" onClick={handleTema}>
                    <i className="fa-solid fa-circle-half-stroke h3"></i>
                    Tema
                  </div>

                  <Link to={"/nosotros"} className="nav-item mx-3">
                    <i className="fa-solid fa-mobile-screen h3"></i>
                    Contáctanos
                  </Link>

                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default MenuBurger