import React, { useState, useEffect, useContext } from 'react'
import "../styles/Carrito.sass"
import { servicios } from '../context'

const CarritoCard = ({ img, nombre, precio, cantidad, id, suma, resta, eliminarOrden }) => {

    const [subtotal, setSubtotal] = useState(precio * 1000 * cantidad)
    const { subtotales, setSubtotales, ordenes } = useContext(servicios.serviciosContext)

    const primerTotal = () => {
        setSubtotales(subtotales => [...subtotales, subtotal])
    }

    useEffect(() => {
        if (subtotales.length !== ordenes.length + 1)
            primerTotal()
    }, []) /* revisar array de subtotales -> cuadrarlo como ordenes */

    useEffect(() => {
        setSubtotal(cantidad * precio * 1000);
    }, [cantidad])

    return (
        <>
            <div className="cart-card py-2 mb-3 mx-2 d-flex align-items-center">
                <div className='cart-img-container'>
                    <img className='rounded-3 cart-img' src={img} alt="Referencia del Servicio" />
                </div>
                <div className="cart-info ms-2">
                    <p className='m-0'>{nombre.toUpperCase()}</p>
                    <p className='mb-2'><span className='purple-text'>Precio:  </span>{precio}</p>
                    <div className='subt rounded-2'>
                        <div className='d-flex align-items-baseline justify-content-between'>
                            <div className="input-group mas-menos m-0 ">
                                <button className="btn btn-sm m-0" onClick={() => suma(id)}>+</button>
                                <input disabled type="text text-center" className="w-25" value={cantidad} />
                                <button className="btn btn-sm m-0" onClick={() => resta(id)}>-</button>
                            </div>
                            <p className='m-0 px-2'>Subtotal: ${subtotal}</p>
                        </div>
                    </div>
                    <div className="input-group__add-cart mt-3">
                        <button onClick={() => eliminarOrden(id)} className='btn py-0'>
                            <p className='my-0 user-icon'><i className="fa-solid fa-trash user-icon"></i> Eliminar del Carrito</p>
                        </button>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CarritoCard