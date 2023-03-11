import React, { useContext } from 'react'
import { authAPI } from '../api/'
import { validarExistencia } from '../api/usuariosAPI'
import { usuario } from '../context'

const Login = () => {

    const { enviarUsuario, setUsuarioActual, usuarioActual } = useContext(usuario.usuariosContext)

    const handleLogin = async () => {
        const usuarioLogin = await authAPI.login()
        const nuevoUsuario = {
            "nombre": usuarioLogin.displayName,
            "correo": usuarioLogin.email,
            "imagen": usuarioLogin.photoURL,
            "id": usuarioLogin.uid
        }
        /* Buscar forma de validar si el usuario ya existe */
        const existe = await validarExistencia(nuevoUsuario.id)
        if (existe) {
            setUsuarioActual(existe.usuario)
        } else {
            await enviarUsuario(nuevoUsuario, nuevoUsuario.id)
            setUsuarioActual(nuevoUsuario)
        }
    }

    return (
        <>
            <div className="screen row gx-0">
                <div className='col-md-3'></div>
                <div className='col-md-5'>
                    <div className='d-flex align-items-baseline mx-4 mt-5'>
                        <i className="user-icon h3 fa-solid fa-user"></i>
                        <h5 className='mx-2'>Login</h5>
                    </div>

                    <div className=" d-flex my-3">
                        <img className='m-auto image-profile' src="https://res.cloudinary.com/dxre2n1ja/image/upload/v1677613038/Happy%20Tails%20Spa%20App/Account-Avatar-Profile-PNG-Photo_nqxxzd.png" width={"20%"} alt="User Logo" />
                    </div>

                    <div className="form-login mx-4 mb-5 ">
                        <label className='d-flex flex-column form-label title '>Nombre
                            <input className='border-0 border-bottom input-login' type="text" />
                        </label>
                        <label className='d-flex flex-column form-label title '>Correo Electrónico
                            <input className='border-0 border-bottom input-login' type="text" />
                        </label>
                        <label className='d-flex flex-column form-label title '>Contraseña
                            <input className='border-0 border-bottom input-login' type="password" />
                        </label>
                        <label className='d-flex flex-column form-label title '>Teléfono
                            <input className='border-0 border-bottom input-login' type="text" />
                        </label>
                        <label className='d-flex flex-column form-label title '>Dirección de Domicilio
                            <input className='border-0 border-bottom input-login' type="text" />
                        </label>
                    </div>
                </div>
                <div className="my-pets px-4 mb-5 col-md-4 d-flex flex-column justify-content-center align-items-center">
                    <p className='title'>Mis Mascotas</p>
                    <p className='fw-semibold'>Aún no tienes Mascotas Registradas</p>
                </div>
                <div className='col-md-3'></div>
                <div className="d-flex flex-column col-md-7">
                    <h5 className='text-center mb-5 register'>Regístrate para tener una mejor experiencia en nuestra Web</h5>
                    <button onClick={handleLogin} className="btn btn-login mx-2 mb-2 mx-md-auto ">Log In</button>
                </div>

            </div>


        </>
    )
}

export default Login