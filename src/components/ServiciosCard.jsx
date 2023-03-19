import React, { useContext, useState } from 'react'
import { servicios } from '../context'
import Swal from 'sweetalert2'

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
        id, nombre, img, precio, cantidad, subtotalOrden: precio * cantidad
    }

    const nuevaOrden = (_id) => {

        if (ordenes.find((o) => o.id === _id)) {
            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom',
                showConfirmButton: false,
                timer: 3000,
            })

            Toast.fire({
                icon: 'warning',
                text: 'Este servicio ya está en tu carrito'
            })

        } else {
            const Toast = Swal.mixin({
                toast: true,
                position: 'bottom',
                showConfirmButton: false,
                timer: 3000,
            })

            Toast.fire({
                icon: 'success',
                text: 'Tu servicio ha sido agregado al carrito'
            })
            setOrdenes(ordenes => [...ordenes, OrdenInfo])
        }
    }

    return (
        <div className="serv-card rounded-4 mb-3 shadow">
            <img className='w-100 mx-auto object-fit-cover img-card rounded-4 p-2' src={img} alt="baño de la mascota" />

            <div className='d-flex flex-column serv-card-info p-3'>
                <p>{nombre}</p>
                <p><span className='purple-text'>Precio: </span>${precio}</p>
                <p>{descripcion}</p>
                <div className="input-group d-flex flex-row flex-wrap">
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
        </div>
    )
}

export default ServiciosCard