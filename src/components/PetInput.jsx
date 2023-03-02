import React from 'react'


const PetInput = () => {
    return (
        <>
            <div className='text-center mt-2'>
                <button className="btn btn-edit" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                    Registrar Nueva Mascota
                </button>
            </div>
            <div className="collapse w-100 my-2" id="collapseExample">
                <form className="form-login mx-4 ">
                    <label className='d-flex flex-column form-label title '>Nombre de tu Mascota
                        <input className='border-0 border-bottom input-login' type="text" />
                    </label>
                    <label className='d-flex flex-column form-label title '>Especie
                        <select className='border-0 border-bottom input-login' type="text">
                            <option selected>Perro</option>
                            <option>Gato</option>
                        </select>
                    </label>
                    <label className='d-flex flex-column form-label title'>Imagen
                        <input className='border-0 border-bottom input-login' type="text" />
                    </label>
                    <label className='d-flex flex-column form-label title '>Edad
                        <input className='border-0 border-bottom input-login' type="text" />
                    </label>
                </form>
                <button className='btn btn-edit mx-4 mb-4' type='submit'>Registrar</button>
            </div>
        </>
    )
}

export default PetInput