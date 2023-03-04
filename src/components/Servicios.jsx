import React, { useState } from 'react'
import BusquedaVacia from './BusquedaVacia'

const Servicios = ({lista}) => {

    const [cant, setCant] = useState(1)

    const suma = () => {
        setCant(cant + 1)
    }

    const resta = () => {
        if (cant > 1) {
            setCant(cant - 1)
        }
    }


    if (lista && lista.length === 0) return (

        <BusquedaVacia />
    )

    return (
        <>
            {lista && lista.map(s => {
                let { nombre, precio, descripcion, id, img } = s
                return (
                    <div className="serv-card mb-5" key={id}>
                        <img className='w-100 mx-auto object-fit-cover img-card rounded-3' src={img} alt="photo" />
                        <p>{nombre}</p>
                        <div className="serv-info">
                            <p><span className='purple-text'>Precio: </span>${precio}</p>
                            <p>{descripcion}</p>
                        </div>

                        <div className="input-group d-flex flex-row">
                            <div className="input-group__mas-menos d-flex flex-row">
                                <button className="btn py-0" onClick={suma}>+</button>
                                <input disabled type="text text-center" className="form-control" value={cant}/>
                                <button className="btn py-0" onClick={resta}>-</button>
                            </div>

                            <div className="input-group__add-cart">
                                <button className='btn py-0'>
                                    <p><i className="fa-solid fa-paw user-icon"></i> Añadir al Carrito</p>
                                </button>
                            </div>
                        </div>
                    </div>
                )
            })}

        </>
    )
}

export default Servicios