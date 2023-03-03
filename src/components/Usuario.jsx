import React from 'react'
import PetCard from './PetCard'
import PetInput from './PetInput'

const Usuario = () => {
    return (
        <>
            <div className="screen row gx-0">
                <div className='col-md-3'></div>
                <div className='col-md-5'>
                    <div className='d-flex align-items-baseline mx-4 mt-5'>
                        <i className="user-icon h3 fa-solid fa-user"></i>
                        <h5 className='mx-2'>Perfil</h5>
                    </div>

                    <div className=" d-flex my-3">
                        <img className='m-auto rounded-circle image-profile ' src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1677613038/Happy%20Tails%20Spa%20App/Account-Avatar-Profile-PNG-Photo_nqxxzd.png" width={"20%"} alt="User Logo" />
                    </div>

                    <form className="form-login mx-4 mb-5 ">
                        <label className='d-flex flex-column form-label title '>Nombre
                            <input className='border-0 border-bottom input-login' type="text" />
                            <i className="fa-solid fa-pencil opacity-25"></i>
                        </label>
                        <label className='d-flex flex-column form-label title '>Correo Electrónico
                            <input className='border-0 border-bottom input-login' type="text" />
                            <i className="fa-solid fa-pencil opacity-25"></i>
                        </label>
                        <label className='d-flex flex-column form-label title '>Contraseña
                            <input className='border-0 border-bottom input-login' type="password" autoComplete="current-password"/>
                            <i className="fa-solid fa-pencil opacity-25"></i>
                        </label>
                        <label className='d-flex flex-column form-label title '>Teléfono
                            <input className='border-0 border-bottom input-login' type="text" />
                            <i className="fa-solid fa-pencil opacity-25"></i>
                        </label>
                        <label className='d-flex flex-column form-label title '>Dirección de Domicilio
                            <input className='border-0 border-bottom input-login' type="text" />
                            <i className="fa-solid fa-pencil opacity-25"></i>
                        </label>
                    </form>
                    <div className="btns-profile-web">
                        <button className="btn btn-login mx-2 mb-2 mx-md-1 ">Guardar</button>
                        <button className="btn btn-logout mx-2 mb-2 mx-md-1 ">Log Out</button>
                    </div>
                </div>

                <div className="my-pets px-4 mb-5 col-md-4 d-flex flex-column justify-content-center align-items-center">
                    <p className='title'>Mis Mascotas</p>

                    <PetCard />
                    <PetCard />

                    <PetInput />
                </div>


                <div className='col-md-3'></div>
                <div className="col-md-7 btns-profile-mobile">
                    <button className="btn btn-login mx-2 mb-2 mx-md-1 ">Guardar</button>
                    <button className="btn btn-logout mx-2 mb-2 mx-md-1 ">Log Out</button>
                </div>

            </div>
        </>
    )
}

export default Usuario