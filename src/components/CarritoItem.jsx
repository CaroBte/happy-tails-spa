import React from 'react'
import "../styles/Carrito.sass"

const CarritoItem = () => {
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
                        <div className='d-flex align-items-baseline'>
                            <div className="input-group mas-menos m-0 ">
                                <button className="btn btn-sm m-0">-</button>
                                <input disabled type="text" className="w-25" />
                                <button className="btn btn-sm m-0">+</button>
                            </div>
                            <p className='m-0'>SubT: $55.000</p>
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