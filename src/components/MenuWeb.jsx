import React from 'react'
import { Link } from 'react-router-dom'


const MenuWeb = () => {
    return (
        <>
            <div className="d-flex flex-column fixed-left">

                <div className="name_logo d-flex flex-column align-items-center">
                    <i className="fa-solid fa-paw h3"></i>
                    <h1>Happy Tails</h1>
                    <h1>Spa</h1>
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
        </>
    )
}

export default MenuWeb