import React from 'react'
import { Link } from 'react-router-dom'


const MenuBurger = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg d-flex cont_nav">
        <div className="container-fluid d-flex ">
          <h1 className='navbar-brand h1_title'>Happy Tails Spa</h1> {/* Link que lleve al Home */}

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <i className="fa-solid fa-bars burger_icon"></i>
          </button>

          <div
            className="offcanvas offcanvas-start"
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

              <div className="navbar-nav div_ppal d-flex flex-column">

                <div className="list_one d-flex flex-column">

                  <Link to={"/buscar"} className="nav-item mx-3">
                    <i className="fa-solid fa-magnifying-glass h3"></i>
                    Buscar
                  </Link>

                  <Link to={"/"} className="nav-item mx-3">
                    <i className="fa-solid fa-house-chimney-user h3"></i>
                    Home
                  </Link>

                  <Link to={"/carrito"} className="nav-item mx-3">
                    <i className="fa-solid fa-cart-shopping h3"></i>
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
                  <Link className="nav-item mx-3">
                    <i className="fa-solid fa-circle-half-stroke h3"></i>
                    Tema
                  </Link>

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