import React from 'react'
import { Formik, Field, Form } from 'formik'


const PetInput = () => {

    const handleSubmit = (values) => {
        console.log(values, "Values de la mascota");
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
                    initialValues={{
                        petNombre: "",
                        especie: "",
                        imagen: "",
                        edad: ""
                    }}

                    onSubmit={handleSubmit}
                >
                    {() => (

                        <Form className="form-login mx-4 ">

                            <label className='d-flex flex-column form-label title '>Nombre de tu Mascota
                                <Field className='border-0 border-bottom input-login' name="petNombre" type="text" />
                            </label>

                            <label className='d-flex flex-column form-label title '>Especie
                                <Field name="especie" as="select" className='border-0 border-bottom input-login'>

                                    <option disabled value="">Selecciona</option>
                                    <option value="Perro">Perro</option>
                                    <option value="Gato">Gato</option>
                                </Field>
                            </label>

                            <label className='d-flex flex-column form-label title'>Imagen
                                <Field className='border-0 border-bottom input-login' name="imagen" type="text" />
                            </label>

                            <label className='d-flex flex-column form-label title '>Edad
                                <Field className='border-0 border-bottom input-login' name="edad" type="text" />
                            </label>

                            <button className='btn btn-edit mx-4 mb-4' type='submit'>Registrar</button>
                        </Form>
                    )}


                </Formik>


            </div>
        </>
    )
}

export default PetInput