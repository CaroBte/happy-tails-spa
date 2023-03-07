import React from 'react'
import { Outlet } from 'react-router'

const Footer = () => {
    return (
        <>
            <Outlet />

            <div className="row justify-content-end gx-0">

                <div className="cont_footer d-flex col-md-9" id='footer'>
                    <div className="title_footer text-uppercase mx-2 py-2">
                        <h2>Happy Tails Spa</h2>
                    </div>

                    <div className="div_info d-flex">

                        <div className="info mx-3">
                            <h5><i className="fa-solid fa-location-dot h4"></i> Valle de Aburrá, Antioquia, Colombia</h5>
                            <h5><i className="fa-solid fa-mobile-screen h4"></i> +57 300 000 0000</h5>
                            <h5><i className="fa-solid fa-envelope h4"></i> happytailsspa@gmail.com</h5>
                        </div>

                        <div className="pagos mx-3">
                            <h4>Aceptamos</h4>
                            <img src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1677600679/Happy%20Tails%20Spa%20App/credit-card-png-hd-major-credit-card-logo-png-clipart-8552_scvql3.png" alt="pagos" />
                        </div>

                        <div className="socialm mx-3">
                            <h4>Síguenos</h4>
                            <ul className='socialm__list d-flex gap-4 justify-content-center'>
                                <li>
                                    <i className="fa-brands fa-instagram"></i>
                                </li>
                                <li>
                                    <i className="fa-brands fa-square-facebook"></i>
                                </li>
                                <li>
                                    <i className="fa-brands fa-facebook-messenger"></i>
                                </li>
                                <li>
                                    <i className="fa-brands fa-square-pinterest"></i>
                                </li>
                                <li>
                                    <i className="fa-brands fa-square-whatsapp"></i>
                                </li>
                                <li>
                                    <i className="fa-brands fa-tiktok"></i>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="powered">
                        <h5>Powered with <i className="fa-solid fa-heart"></i> by <a href="https://github.com/Bney28"> Bney,</a> <a href="https://github.com/CaroBte/"> CaroBte,</a> <a href="https://github.com/Jaredzu"> Jaredzu</a></h5>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer