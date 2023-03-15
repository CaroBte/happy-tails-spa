import PetCard from './PetCard'
import PetInput from './PetInput'
import React, { useContext, useState } from 'react'
import { usuario } from '../context'

const PetsContainer = ({ mascotas }) => {

    const { eliminarMascota, usuarioActual, traerMascotas } = useContext(usuario.usuariosContext)

    const [mascotaActual, setMascotaActual] = useState({
        id: null,
        petNombre: "",
        especie: "",
        imagen: "",
        edad: "",
    })

    const handleEliminar = async (_idM) => {
        await eliminarMascota(usuarioActual.id, _idM)
        await traerMascotas(usuarioActual.id)
    }

    const handleEditar = async (_mascota) => {
        setMascotaActual(_mascota)
    }

    return (
        <>
            {mascotas.length > 0 ? (mascotas.map(m => {
                return (
                    <PetCard key={m.id}
                        m={m}
                        handleEliminar={handleEliminar}
                        handleEditar={handleEditar} />)
            })) :
                (<div className="my-pets px-4 mb-5 d-flex flex-column justify-content-center align-items-center">
                    <p className='fw-semibold'>Aún no tienes Mascotas Registradas</p>
                </div>)}

            <PetInput mascotaActual={mascotaActual}
                setMascotaActual={setMascotaActual}
            />
        </>
    )
}

export default PetsContainer