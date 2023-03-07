import React, { useContext, useState } from 'react'
import { servicios } from '../context'

const ServiciosCard = ({ id, img, nombre, precio, descripcion }) => {

    const { ordenes, setOrdenes } = useContext(servicios.serviciosContext)
    const [cantidad, setCantidad] = useState(1)

    const suma = () => {
        setCantidad(cantidad + 1)
    }

    const resta = () => {
        if (cantidad > 1) {
            setCantidad(cantidad - 1)
        }
    }

    let OrdenInfo = {
        id, nombre, img, precio, cantidad
    }

    const nuevaOrden = (_id) => {

        if (ordenes.find((o) => o.id === _id)) {
            alert("ya existe")
        } else {
            alert("creando tu orden...")
            setOrdenes(ordenes => [...ordenes, OrdenInfo])
        }

    }

    return (
        <div className="serv-card mb-3">
            <img className='w-100 mx-auto object-fit-cover img-card rounded-3' src={img} alt="baño de la mascota" />
            <p>{nombre}</p>
            <div className="serv-info">
                <p><span className='purple-text'>Precio: </span>${precio}</p>
                <p>{descripcion}</p>
            </div>

            <div className="input-group d-flex flex-row">
                <div className="input-group__mas-menos d-flex flex-row">
                    <button className="btn py-0" onClick={suma}>+</button>
                    <input disabled type="text" className="form-control" value={cantidad} />
                    <button className="btn py-0" onClick={resta}>-</button>
                </div>

                <div className="input-group__add-cart">
                    <button className='btn py-0' onClick={() => nuevaOrden(id)}>
                        <p><i className="fa-solid fa-paw user-icon" ></i> Añadir al Carrito</p>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ServiciosCard