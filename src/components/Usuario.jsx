import React, { useContext, useEffect } from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import { authAPI } from '../api/'
import { usuario } from '../context'
import Swal from 'sweetalert2'
import PetsContainer from './PetsContainer'

const Usuario = () => {

    const { usuarioActual, enviarUsuario, traerUsuario, traerMascotas, mascotas } = useContext(usuario.usuariosContext)

    useEffect(() => {
        traerMascotas(usuarioActual.id)
    }, [mascotas])

    const handleSubmit = async (values) => {
        await enviarUsuario(values, usuarioActual.id)
        await traerUsuario(usuarioActual.id)

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Datos actualizados',
            showConfirmButton: false,
            timerProgressBar: true,
            timer: 3000
        })
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

                        /* VALIDATIONS FORM */

                        validate={(values) => {
                            let errores = {}

                            // Validate Nombre
                            if (!values.nombre) {

                                errores.nombre = "Por favor ingresa tu nombre"

                            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.nombre)) {
                                errores.nombre = "El nombre solo puede contener letras y espacios"
                            }

                            // Validate Correo
                            if (!values.correo) {

                                errores.correo = "Por favor ingresa tu correo"

                            } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.correo)) {
                                errores.correo = "El correo debe ser válido"
                            }

                            // Validate Imagen
                            if (!values.imagen) {

                                errores.imagen = "Por favor ingresa una URL de tu imagen"

                            } else if (!/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/.test(values.imagen)) {
                                errores.imagen = "Ingresa una URL válida"
                            }

                            // Validate Teléfono
                            if (!values.telefono) {

                                errores.telefono = "Por favor ingresa tu número de contacto"

                            } else if (values.telefono.length < 7 || values.telefono.length > 10) {
                                errores.telefono = "Ingresa un teléfono entre 7 y 10 dígitos"

                            } else if (!/^[0-9]+$/.test(values.telefono)) {

                                errores.telefono = "Por favor solo ingresa números sin espacios"
                            }

                            // Validate Dirección
                            if (!values.direccion) {

                                errores.direccion = "Por favor ingresa tu ciudad y dirección de domicilio"
                            }

                            return errores

                        }}

                        onSubmit={handleSubmit}>

                        {({ errors }) => (
                            <Form className="form-login mx-4 mb-5 ">

                                <label className='d-flex flex-column form-label title '>Nombre
                                    <Field className='border-0 border-bottom input-login' name='nombre' type="text" />
                                    <i className="fa-solid fa-pencil opacity-25"></i>
                                    <ErrorMessage name='nombre' component={() => (
                                        <div className='text-danger'>
                                            {errors.nombre}
                                        </div>
                                    )} />

                                </label>

                                <label className='d-flex flex-column form-label title '>Correo Electrónico
                                    <Field className='border-0 border-bottom input-login' name='correo' type="email" />
                                    <i className="fa-solid fa-pencil opacity-25"></i>
                                    <ErrorMessage name='correo' component={() => (
                                        <div className='text-danger'>
                                            {errors.correo}
                                        </div>
                                    )} />
                                </label>

                                <label className='d-flex flex-column form-label title '>URL imagen de perfil
                                    <Field className='border-0 border-bottom input-login' name='imagen' type="text" />
                                    <i className="fa-solid fa-pencil opacity-25"></i>
                                    <ErrorMessage name='imagen' component={() => (
                                        <div className='text-danger'>
                                            {errors.imagen}
                                        </div>
                                    )} />
                                </label>

                                <label className='d-flex flex-column form-label title '>Teléfono
                                    <Field className='border-0 border-bottom input-login' name='telefono' type="tel" />
                                    <i className="fa-solid fa-pencil opacity-25"></i>
                                    <ErrorMessage name='telefono' component={() => (
                                        <div className='text-danger'>
                                            {errors.telefono}
                                        </div>
                                    )} />
                                </label>

                                <label className='d-flex flex-column form-label title '>Dirección de Domicilio
                                    <Field className='border-0 border-bottom input-login' name='direccion' type="text" />
                                    <i className="fa-solid fa-pencil opacity-25"></i>
                                    <ErrorMessage name='direccion' component={() => (
                                        <div className='text-danger'>
                                            {errors.direccion}
                                        </div>
                                    )} />
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
                    <PetsContainer mascotas={mascotas} />
                </div>

            </div>
        </>
    )
}

export default Usuario