import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Buscar, Carrito, Perfil, SobreNosotros } from '../pages'

const Navbar = () => {
    return (
        <>
            <div className="menu-burguer">

                <nav className="navbar navbar-expand-lg cont_nav">

                    <div className="container-fluid fixed-left">
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
                        className="offcanvas offcanvas-end"
                        tabIndex="-1"
                        id="offcanvasNavbar"
                        aria-labelledby="offcanvasNavbarLabel"
                        >

                            <div className="offcanvas-body menu_body">
                                <div className="offcanvas-header d-flex align-items-end">
                                    <button
                                    type="button"
                                    data-bs-dismiss="offcanvas"
                                    aria-label="Close"
                                    >
                                        <i className="fa-solid fa-circle-xmark h3 x_icon"></i>
                                    </button>
                                </div>

                                <ul className="navbar-nav ul_ppal">

                                    <li className="nav-item mx-3">
                                        <a>
                                            <i className="fa-solid fa-magnifying-glass h3"></i>
                                            Buscar
                                        </a>
                                    </li>

                                    <li className="nav-item mx-3">
                                        <a>
                                            <i className="fa-solid fa-house-chimney-user h3"></i>
                                            Home
                                        </a>
                                    </li>

                                    <li className="nav-item mx-3">
                                        <a>
                                            <i className="fa-solid fa-cart-shopping h3"></i>
                                            Carrito
                                        </a>
                                    </li>

                                    <li className="nav-item mx-3">
                                        <a>
                                            <i className="fa-solid fa-paw h3"></i>
                                            Nosotros
                                        </a>
                                    </li>

                                    <li className="nav-item mx-3">
                                        <a>
                                            <i className="fa-solid fa-user h3"></i>
                                            Perfil
                                        </a>
                                    </li>

                                </ul>

                                <ul className="navbar-nav ul_sec">
                                    <li className="nav-item mx-3">
                                        <a>
                                            <i className="fa-solid fa-circle-half-stroke h3"></i>
                                            Tema
                                        </a>
                                    </li>

                                    <li className="nav-item mx-3">
                                        <a>
                                            <i className="fa-solid fa-mobile-screen h3"></i>
                                            Contáctanos
                                        </a>
                                    </li>
                                </ul>

                            </div>
                        </div>
                    </div>
                </nav>
            </div>

        </>
    )
}

export default Navbar