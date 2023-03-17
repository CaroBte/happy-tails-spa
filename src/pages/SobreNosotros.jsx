import React from 'react'
import "../styles/BuscarNosotros.sass"

const SobreNosotros = () => {
    return (
        <>
            <div className="screen row gx-0 justify-content-end">
                <div className="cont_nosotros col-md-9">
                    <div className='d-flex align-items-baseline mx-4 mt-4'>
                        <i className="user-icon h3 fa-solid fa-paw"></i>
                        <h5 className='mx-2'>Sobre Nosotros</h5>
                    </div>

                    <div className="textos mt-3 px-4">
                        <h6 className='py-2'>
                            <span className='fw-semibold h5'> HAPPY TAILS SPA </span> nace desde la necesidad de poder darle un cuidado especial
                            a nuestras mascotas sin que trasladarlas sea un inconveniente tanto para ellos
                            como para los mamás y papás gatunos y perrunos.
                        </h6>

                        <h5 className='mt-5 border-bottom border-danger-subtle'>
                            Cómo contactarnos
                        </h5>
                        <div>
                            <ul>
                                <li><i className="fa-solid fa-location-dot h4 mt-1"></i> Estamos ubicados en el <span className='fw-semibold'>Valle de Aburrá, Antioquia, Colombia</span></li>
                                <li><i className="fa-solid fa-mobile-screen h4 mt-1"></i> No dudes en llamarnos o escribirnos por nuestro Whatsapp <span className='fw-semibold'>+57 300 000 0000</span></li>
                                <li><i className="fa-solid fa-envelope h4 mt-1"></i> O también puedes escribirnos a nuestro correo <span className='fw-semibold'>happytailsspa@gmail.com</span></li>
                            </ul>
                        </div>

                        <h5 className='mt-5 border-bottom border-danger-subtle'>
                            Nuestros Clientes Felices
                        </h5>
                        <div className='div_imgs d-flex flex-row flex-wrap justify-content-center'>
                            <img src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1677882626/Happy%20Tails%20Spa%20App/photo-1600272008408-6e05d5aa3e7a_u81i3z.jpg" alt="pet" />
                            <img src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1677882551/Happy%20Tails%20Spa%20App/perrocontento_dfqnk0.jpg" alt="pet" />
                            <img src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1677882550/Happy%20Tails%20Spa%20App/6ddbfe_2d8ca8e11c6c4d69a5d1cd36a80beab3_mv2_txba0u.jpg" alt="pet" />
                            <img src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1677882627/Happy%20Tails%20Spa%20App/Gato_beb_C3_A9_bo64ck.jpg" alt="pet" />
                            <img src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1677883698/Happy%20Tails%20Spa%20App/gato-durmiendo-tranquilamente-sobre-su-cama_543404-359_h9xbl5.jpg" alt="pet" />
                            <img src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1677883824/Happy%20Tails%20Spa%20App/como_puedo_mantener_a_mi_perro_siempre_limpio_15688_orig_wkpcls.jpg" alt="pet" />
                        </div>

                        <h5 className='border-bottom border-danger-subtle mt-5'>
                            Nuestros Valores
                        </h5>
                        <div>
                            <ul>
                                <li><i className="fa-solid fa-heart h6"></i> Amor por las mascotas</li>
                                <li><i className="fa-solid fa-heart h6"></i> Responsabilidad</li>
                                <li><i className="fa-solid fa-heart h6"></i> Respeto</li>
                                <li><i className="fa-solid fa-heart h6"></i> Solidaridad</li>
                                <li><i className="fa-solid fa-heart h6"></i> Sentido de Pertenencia</li>
                            </ul>
                        </div>

                        <h6 className='py-2 px-5 mt-5 text-center'>
                            Contáctanos y dale a tu mejor amigo peludo una experiencia
                            relajante y llenita de amor!
                        </h6>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SobreNosotros