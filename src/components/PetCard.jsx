import React from 'react'

const PetCard = ({ m, handleEliminar, handleEditar }) => {

    const { petNombre, imagen, edad, especie, id } = m

    return (
        <>
            <div className="pet-card d-flex m-1 rounded-3 w-100">
                <img className='rounded-circle p-1 object-fit-cover' src={imagen} width={"140px"} height={"140px"} alt={petNombre} />
                <div className="pet-info d-flex flex-column justify-content-center mx-3 p-1">
                    <p className='m-0'>{petNombre}</p>
                    <p className='m-0'>Especie: {especie}</p>
                    <p className='m-0'>Edad: {edad}</p>
                </div>
                <div className='d-flex align-items-center gap-4'>
                    <i onClick={() => handleEliminar(id)} className="fa-solid fa-trash text-danger opacity-50" role='button' ></i>
                    <i onClick={() => handleEditar(m)} role='button' data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" className="fa-solid fa-pencil opacity-25"></i>
                </div>
            </div>
        </>
    )
}

export default PetCard