import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { servicios } from '../context'


const MenuWeb = () => {

    const { ordenes } = useContext(servicios.serviciosContext)

    
    const handleTema = () => {
        
        const body = document.querySelector("body")
        const navBurguer = document.querySelector('.menuBurger')
        const footer = document.querySelector('#footer')
        const inputs = document.querySelectorAll(".input-login")

        for (let index = 0; index <inputs.length; index++) {
            const element = inputs[index];

            element.classList.toggle('dark')
        }

        body.classList.toggle('dark')
        navBurguer.classList.toggle('dark')
        footer.classList.toggle('dark')
    }

    return (
        <>
            <div className="d-flex flex-column fixed-left">

                <Link to={"/"} className="name_logo d-flex flex-column align-items-center text-decoration-none">
                    <i className="fa-solid fa-paw h3"></i>
                    <h1>Happy Tails</h1>
                    <h1>Spa</h1>
                </Link>

                <div className="navbar-nav div_ppal d-flex flex-column">

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
                        <div className="nav-item mx-3 tema_web" onClick={handleTema}>
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
        </>
    )
}

export default MenuWeb