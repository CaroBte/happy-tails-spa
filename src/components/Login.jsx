import React, { useContext, useState } from 'react'
import { authAPI } from '../api/'
import { validarExistencia } from '../api/usuariosAPI'
import { usuario } from '../context'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import Swal from 'sweetalert2'

const Login = () => {

    const { enviarUsuario, traerUsuario, setUsuarioActual } = useContext(usuario.usuariosContext)

    const [registrado, setRegistrado] = useState(true)


    // INGRESO EXISTENTE CON CORREO Y CONTRASEÑA MANUALMENTE
    const handleSignupWithEmail = async (values) => {
        const usuarioExistente = await authAPI.signWithEmail(values.correo, values.contrasena)

        await traerUsuario(usuarioExistente.uid)
    }

    // LOGIN CON CORREO Y CONTRASEÑA INGRESADOS MANUALMENTE
    const handleLoginEmail = async (values) => {
        const usuarioLoginEmail = await authAPI.loginEmail(values.correo, values.contrasena)

        const nuevoUsuarioEmail = {
            "nombre": values.nombre,
            "correo": usuarioLoginEmail.email,
            "imagen": values.imagen,
            "telefono": values.telefono,
            "direccion": values.direccion,
            "id": usuarioLoginEmail.uid
        }
        await enviarUsuario(nuevoUsuarioEmail, nuevoUsuarioEmail.id)
        setUsuarioActual(nuevoUsuarioEmail)

        Swal.fire({
            position: 'center',
            icon: 'success',
            title: '¡Bienvenid@! 🤗',
            text: 'Ahora puedes registrar tus mascotas y hacer compras de nuestros servicios 🐶😸',
            showConfirmButton: true,
            confirmButtonText: "¡Iré a probarlo!",
            confirmButtonColor: '#b60478',
        }).then(() => {

            Swal.fire({
                position: 'center',
                text: 'No olvides completar tus datos de contacto, para enviarte el servicio',
                showConfirmButton: true,
                confirmButtonText: "¡Lo haré!",
                confirmButtonColor: '#b60478',
            })
        })


    }

    // LOGIN CON GOOGLE
    const handleLogin = async () => {
        const usuarioLogin = await authAPI.login()
        const nuevoUsuario = {
            "nombre": usuarioLogin.displayName,
            "correo": usuarioLogin.email,
            "imagen": usuarioLogin.photoURL,
            "id": usuarioLogin.uid
        }
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
                        <i className="fa-solid fa-user m-auto image-profile h1 border border-dark-subtle border-4 rounded-circle p-3"></i>
                    </div>

                    {
                        registrado ? (<>

                            <Formik

                                initialValues={{
                                    nombre: "",
                                    correo: "",
                                    contrasena: "",
                                    imagen: "",
                                    telefono: "",
                                    direccion: ""
                                }}

                                onSubmit={handleLoginEmail}

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

                                    // Validate Contraseña
                                    if (!values.contrasena) {

                                        errores.contrasena = "Ingresa una contraseña"

                                    } else if (values.contrasena.length < 6) {
                                        errores.contrasena = "La contraseña debe tener al menos 6 dígitos"
                                    }

                                    return errores
                                }

                                }
                            >

                                {({ errors }) => (
                                    <Form className="form-login mx-4">
                                        <label className='d-flex flex-column form-label title '>Nombre*
                                            <Field className='border-0 border-bottom input-login' name="nombre" type="text" />
                                            <ErrorMessage name='nombre' component={() => (
                                                <div className='text-danger'>
                                                    {errors.nombre}
                                                </div>
                                            )} />
                                        </label>

                                        <label className='d-flex flex-column form-label title '>Correo Electrónico*
                                            <Field className='border-0 border-bottom input-login' name="correo" type="text" />
                                            <ErrorMessage name='correo' component={() => (
                                                <div className='text-danger'>
                                                    {errors.correo}
                                                </div>
                                            )} />
                                        </label>

                                        <label className='d-flex flex-column form-label title '>Contraseña*
                                            <Field className='border-0 border-bottom input-login' name="contrasena" type="password" />
                                            <ErrorMessage name='contrasena' component={() => (
                                                <div className='text-danger'>
                                                    {errors.contrasena}
                                                </div>
                                            )} />
                                        </label>

                                        <label className='d-flex flex-column form-label title '>URL imagen de perfil
                                            <Field className='border-0 border-bottom input-login' name='imagen' type="text" />
                                        </label>

                                        <label className='d-flex flex-column form-label title '>Teléfono
                                            <Field className='border-0 border-bottom input-login' name="telefono" type="text" />
                                        </label>

                                        <label className='d-flex flex-column form-label title '>Dirección de Domicilio
                                            <Field className='border-0 border-bottom input-login' name="direccion" type="text" />
                                        </label>

                                        <h5 className='text-center my-4 register'>Regístrate para tener una mejor experiencia en nuestra Web</h5>
                                        <div className="d-flex">
                                            <button type='submit' className="btn btn-login mx-2 mb-2 mx-md-2 ">Log In</button>
                                            <button type="button" onClick={handleLogin} className="btn btn-logout mx-2 mb-2 mx-md-2 ">Log In with Google</button>
                                        </div>

                                    </Form>
                                )}
                            </Formik>
                            <h5 className='text-center my-4'>¿Ya estás registrado?
                                <span onClick={() => (setRegistrado(!registrado))}
                                    role={"button"}
                                    className='text-decoration-underline ingresa'> Ingresa con tu cuenta</span>
                            </h5>
                        </>) :
                            (<>
                                <Formik
                                    initialValues={{
                                        correo: "",
                                        contrasena: "",
                                    }}

                                    onSubmit={handleSignupWithEmail}

                                    validate={(values) => {
                                        let errores = {}

                                        // Validate Correo
                                        if (!values.correo) {

                                            errores.correo = "Por favor ingresa tu correo"

                                        } else if (!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.correo)) {
                                            errores.correo = "El correo debe ser válido"
                                        }

                                        // Validate Contraseña
                                        if (!values.contrasena) {

                                            errores.contrasena = "Ingresa una contraseña"

                                        } else if (values.contrasena.length < 6) {
                                            errores.contrasena = "La contrasena debe tener al menos 6 dígitos"
                                        }

                                        return errores
                                    }

                                    }

                                >
                                    {({ errors }) => (
                                        <Form className="form-login mx-4 ">
                                            <label className='d-flex flex-column form-label title '>Correo Electrónico
                                                <Field className='border-0 border-bottom input-login' name="correo" type="text" autoComplete="true" />
                                                <ErrorMessage name='correo' component={() => (
                                                    <div className='text-danger'>
                                                        {errors.correo}
                                                    </div>
                                                )} />
                                            </label>

                                            <label className='d-flex flex-column form-label title '>Contraseña
                                                <Field className='border-0 border-bottom input-login' name="contrasena" type="password" />
                                                <ErrorMessage name='contrasena' component={() => (
                                                    <div className='text-danger'>
                                                        {errors.contrasena}
                                                    </div>
                                                )} />
                                            </label>

                                            <div className="d-flex my-4">
                                                <button type='submit' className="btn btn-login mx-2 mb-2 mx-md-2 ">Sign In</button>
                                                <button type="button" onClick={handleLogin} className="btn btn-logout mx-2 mb-2 mx-md-2 ">Sign In with Google</button>
                                            </div>
                                        </Form>
                                    )}
                                </Formik>
                                <h5 className='text-center my-4'>¿No estás registrado?
                                    <span onClick={() => (setRegistrado(!registrado))}
                                        role={"button"}
                                        className='text-decoration-underline ingresa'> Crea una cuenta</span>
                                </h5>
                            </>
                            )
                    }

                </div>
                <div className="my-pets px-4 mb-5 col-md-4 d-flex flex-column justify-content-center align-items-center">
                    <p className='title'>Mis Mascotas</p>
                    <p className='fw-semibold'> Accede para Registrar a tus Mascotas</p>
                </div>

                <div className='col-md-3'></div>

            </div>

        </>
    )
}

export default Login