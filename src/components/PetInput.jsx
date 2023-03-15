import React, { useContext } from 'react'
import { usuario } from '../context'
import { Formik, Field, Form, ErrorMessage } from 'formik'
import Swal from 'sweetalert2'

const PetInput = ({ mascotaActual, setMascotaActual }) => {

    const { enviarMascota, usuarioActual, traerMascotas } = useContext(usuario.usuariosContext)

    const handleSubmit = async (values) => {
        await enviarMascota(usuarioActual.id, values)
        await traerMascotas(usuarioActual.id)
        setMascotaActual({
            id: null,
            petNombre: "",
            especie: "",
            imagen: "",
            edad: "",
        })

        if (values.id) {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Tu mascota ha sido actualizada 🐶😸',
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000
            })
        } else {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Tu mascota ha sido agregada 🐶😸',
                showConfirmButton: false,
                timerProgressBar: true,
                timer: 3000
            })
        }
    }

    /* VALIDACIÓN MASCOTAS */
    const validador = (values) => {
        let errores = {}

        // Validar petNombre
        if (!values.petNombre) {

            errores.petNombre = "Por favor ingresa un nombre para tu mascota"

        } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.petNombre)) {
            errores.petNombre = "El nombre solo puede contener letras y espacios"
        }

        // Validar Especie
        if (!values.especie) {

            errores.especie = "Por favor selecciona la especie"
        }

        // Validar Imagen
        if (!values.imagen) {
            errores.imagen = "Por favor ingresa una URL de tu imagen"

        } else if (!/^(?:([A-Za-z]+):)?(\/{0,3})([0-9.\-A-Za-z]+)(?::(\d+))?(?:\/([^?#]*))?(?:\?([^#]*))?(?:#(.*))?$/.test(values.imagen)) {
            errores.imagen = "Ingresa una URL válida"
        }

        // Validar Edad
        if (!values.edad) {
            errores.edad = "Por favor ingresa la edad en meses o años"
        }

        return errores
    }

    const renderForm = ({ errors }) => {
        return (
            <Form className="form-login mx-4 ">

                <label className='d-flex flex-column form-label title '>Nombre de tu Mascota
                    <Field className='border-0 border-bottom input-login' name="petNombre" type="text" />
                    <ErrorMessage name='petNombre' component={() => (
                        <div className='text-danger'>
                            {errors.petNombre}
                        </div>
                    )} />
                </label>

                <label className='d-flex flex-column form-label title '>Especie
                    <Field name="especie" as="select" className='border-0 border-bottom input-login'>

                        <option disabled value="">Selecciona</option>
                        <option value="Perro">Perro</option>
                        <option value="Gato">Gato</option>
                    </Field>
                    <ErrorMessage name='especie' component={() => (
                        <div className='text-danger'>
                            {errors.especie}
                        </div>
                    )} />
                </label>

                <label className='d-flex flex-column form-label title'>Imagen
                    <Field className='border-0 border-bottom input-login' name="imagen" type="text" />
                    <ErrorMessage name='imagen' component={() => (
                        <div className='text-danger'>
                            {errors.imagen}
                        </div>
                    )} />
                </label>

                <label className='d-flex flex-column form-label title '>Edad
                    <Field className='border-0 border-bottom input-login' name="edad" type="text" />
                    <ErrorMessage name='edad' component={() => (
                        <div className='text-danger'>
                            {errors.edad}
                        </div>
                    )} />
                </label>

                <button className='btn btn-edit mx-4 mb-4' type='submit'>Enviar</button>
            </Form>
        )
    }

    return (
        <>
            <div className='text-center my-4'>
                <button className="btn btn-edit" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Registrar Nueva Mascota
                </button>
            </div>

            <div className="collapse w-100 my-2" id="collapseExample">

                <Formik
                    enableReinitialize={true}
                    initialValues={{
                        id: mascotaActual.id,
                        petNombre: `${mascotaActual.petNombre}`,
                        especie: `${mascotaActual.especie}`,
                        imagen: `${mascotaActual.imagen}`,
                        edad: `${mascotaActual.edad}`,
                    }}
                    validate={validador}
                    onSubmit={(values) => {
                        handleSubmit(values)
                    }}
                >
                    {({ errors }) => renderForm({ errors })}
                </Formik>

            </div>
        </>
    )
}

export default PetInput