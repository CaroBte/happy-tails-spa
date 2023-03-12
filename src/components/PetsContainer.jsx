import PetCard from './PetCard'
import PetInput from './PetInput'
import React, { useContext } from 'react'
import { usuario } from '../context'

const PetsContainer = ({ mascotas }) => {

    /*   const { eliminarMascota, usuarioActual } = useContext(usuario.usuariosContext)
  
      const handleEliminar = (_idM) => {
          eliminarMascota(usuarioActual.id, _idM)
      } */

    return (
        <>
            {mascotas.length > 0 ? (mascotas.map(m => {
                return (
                    <PetCard key={m.id}
                        m={m}
                        /* handleEliminar={handleEliminar} */ />)
            })) :
                (<div className="my-pets px-4 mb-5 d-flex flex-column justify-content-center align-items-center">
                    <p className='fw-semibold'>Aún no tienes Mascotas Registradas</p>
                </div>)}

            <PetInput />
        </>
    )
}

export default PetsContainer