import React, { useState } from 'react'
import "../styles/Carrito.sass"

const CarritoItem = () => {

    const [cant, setCant] = useState(1)

    const suma = () => {
        setCant(cant + 1)
    }

    const resta = () => {
        if (cant > 1) {
            setCant(cant - 1)
        }
    }

    return (
        <>
            <div className="cart-card py-2 mb-3 mx-2 d-flex align-items-center" key="{id}">
                <div className='cart-img-container'>
                    <img className='rounded-3 cart-img' src="https://res.cloudinary.com/dwm5krz7f/image/upload/v1677700816/Happy%20Tails%20Spa/24-11-21-_C2_BFEsta_CC_81-bien-ban_CC_83ar-a-las-perras-embarazadas-676x450_f12hcw.jpg" alt="Referencia del Servicio" />
                </div>
                <div className="cart-info ms-2">
                    <p className='text-decoration-underline m-0'>BÁSICO MASCOTA PEQUEÑA</p>
                    <p className='mb-2'><span className='purple-text'>Precio:  </span>$55.000</p>
                    <div className='subt rounded-2'>
                        <div className='d-flex align-items-baseline justify-content-between'>
                            <div className="input-group mas-menos m-0 ">
                                <button className="btn btn-sm m-0" onClick={suma}>+</button>
                                <input disabled type="text text-center" className="w-25" value={cant} />
                                <button className="btn btn-sm m-0" onClick={resta}>-</button>
                            </div>
                            <p className='m-0 px-2'>SubT: $55.000</p>
                        </div>
                    </div>
                        <div className="input-group__add-cart mt-3">
                            <button className='btn py-0'>
                                <p className='my-0 user-icon'><i className="fa-solid fa-paw user-icon"></i> Eliminar del Carrito</p>
                            </button>
                        </div>
                </div>
            </div>

        </>
    )
}

export default CarritoItem