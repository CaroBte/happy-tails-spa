import React, { useContext } from 'react'
import PetCard from './PetCard'
import PetInput from './PetInput'
import { Formik, Field, Form } from 'formik'
import { authAPI } from '../api/'
import { usuario } from '../context'

const Usuario = () => {

    const { usuarioActual, enviarUsuario, traerUsuario } = useContext(usuario.usuariosContext)

    const handleSubmit = async (values) => {
        await enviarUsuario(values, usuarioActual.id)
        await traerUsuario(usuarioActual.id)
    }

    const handleLogout = () => {
        authAPI.logout();
    }

    if (!usuarioActual.direccion) {
        usuarioActual.direccion = ""
    }

    if (!usuarioActual.telefono) {
        usuarioActual.telefono = ""
    }

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
                        <img className='m-auto rounded-circle image-profile ' src={usuarioActual.imagen} width={"20%"} alt="User" />
                    </div>

                    <Formik
                        initialValues={{
                            nombre: `${usuarioActual.nombre}`,
                            correo: `${usuarioActual.correo}`,
                            telefono: `${usuarioActual.telefono}`,
                            direccion: `${usuarioActual.direccion}`,
                            imagen: `${usuarioActual.imagen}`
                        }}

                        onSubmit={handleSubmit}>

                        {() => (

                            <Form className="form-login mx-4 mb-5 ">

                                <label className='d-flex flex-column form-label title '>Nombre
                                    <Field className='border-0 border-bottom input-login' name='nombre' type="text" />
                                    <i className="fa-solid fa-pencil opacity-25"></i>
                                </label>

                                <label className='d-flex flex-column form-label title '>Correo Electrónico
                                    <Field className='border-0 border-bottom input-login' name='correo' type="email" />
                                    <i className="fa-solid fa-pencil opacity-25"></i>
                                </label>

                                <label className='d-flex flex-column form-label title '>URL imagen de perfil
                                    <Field className='border-0 border-bottom input-login' name='imagen' type="text" />
                                    <i className="fa-solid fa-pencil opacity-25"></i>
                                </label>

                                <label className='d-flex flex-column form-label title '>Teléfono
                                    <Field className='border-0 border-bottom input-login' name='telefono' type="tel" />
                                    <i className="fa-solid fa-pencil opacity-25"></i>
                                </label>

                                <label className='d-flex flex-column form-label title '>Dirección de Domicilio
                                    <Field className='border-0 border-bottom input-login' name='direccion' type="text" />
                                    <i className="fa-solid fa-pencil opacity-25"></i>
                                </label>

                                {/* <Field className="btn btn-primary" name="imagen" type="file" /> */}

                                <div className="btns-profile-web">
                                    <button className="btn btn-login mx-2 mb-2 mx-md-1 " type='submit'>Guardar</button>
                                    <button type="button" onClick={handleLogout} className="btn btn-logout mx-2 mb-2 mx-md-1 ">Log Out</button>
                                </div>
                                <div className='col-md-3'></div>
                                <div className="col-md-7 btns-profile-mobile">
                                    <button className="btn btn-login mx-2 mb-2 mx-md-1 " type='submit'>Guardar</button>
                                    <button type="button" onClick={handleLogout} className="btn btn-logout mx-2 mb-2 mx-md-1 ">Log Out</button>
                                </div>
                            </Form>
                        )}
                    </Formik>

                </div>

                <div className="my-pets px-4 mb-5 col-md-4 d-flex flex-column justify-content-center align-items-center">
                    <p className='title'>Mis Mascotas</p>

                    <PetCard />
                    <PetCard />

                    <PetInput />
                </div>

            </div>
        </>
    )
}

export default Usuario