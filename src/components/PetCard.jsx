import React, { useContext } from 'react'
import { usuario } from '../context'

const PetCard = ({ m }) => {

    const { setMascotaActual } = useContext(usuario.usuariosContext)

    const { petNombre, imagen, edad, especie } = m


    const handleEdit = () => {
        console.log("probando...");
        /*  setMascotaActual("ejemplo") <- error, congela la página */
    }

    return (
        <>
            <div className="pet-card d-flex m-1 rounded-3 w-100 ">
                <img className='rounded-circle p-1 object-fit-cover' src={imagen} width={"140px"} height={"140px"} alt={petNombre} />
                <div className="pet-info d-flex flex-column justify-content-center mx-3 p-1">
                    <p className='m-0'>{petNombre}</p>
                    <p className='m-0'>Especie: {especie}</p>
                    <p className='m-0'>Edad: {edad}</p>
                </div>
                <i onClick={() => handleEdit()} role='button' data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" className="fa-solid fa-pencil opacity-25"></i>
            </div>
        </>
    )
}

export default PetCard