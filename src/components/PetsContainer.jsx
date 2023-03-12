import PetCard from './PetCard'
import PetInput from './PetInput'

import React, { useState } from 'react'

const PetsContainer = ({ mascotas }) => {

    return (
        <>
            {mascotas.length > 0 ? (mascotas.map(m => {
                return (<PetCard key={m.id} m={m} />)
            })) : (<div className="my-pets px-4 mb-5 d-flex flex-column justify-content-center align-items-center">
                <p className='fw-semibold'>Aún no tienes Mascotas Registradas</p>
            </div>)}
            <PetInput />
        </>
    )
}

export default PetsContainer