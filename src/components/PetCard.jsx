import React from 'react'

const PetCard = () => {
    return (
        <>
            <div className="pet-card d-flex m-1 rounded-3 w-100 ">
                <img className='rounded-circle p-1' src="https://i.pinimg.com/564x/a4/8a/45/a48a45b038991a7bb43fa803d9a9e601.jpg" width={"25%"} alt="Your Pet Reference" />
                <div className="pet-info d-flex flex-column justify-content-center mx-3 p-1">
                    <p className='m-0'>Nombre Mascota</p>
                    <p className='m-0'>Especie: Gato/Perro</p>
                    <p className='m-0'>Edad: x años</p>
                </div>
                <i className="fa-solid fa-pencil opacity-25"></i>
            </div>
        </>
    )
}

export default PetCard