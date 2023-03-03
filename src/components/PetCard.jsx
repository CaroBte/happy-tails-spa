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
            <div className="pet-card d-flex m-1 rounded-3 w-100">
                <img className='rounded-circle p-1' src="data:image/jpeg;base64,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" width={"25%"} alt="Your Pet Reference" />
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