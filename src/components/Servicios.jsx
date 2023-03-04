import React, { useContext, useState } from 'react'
import BusquedaVacia from './BusquedaVacia'
import { servicios } from '../context'

const Servicios = ({ lista }) => {


    const { orden, setOrden } = useContext(servicios.serviciosContext)


    if (lista && lista.length === 0) return (

        <BusquedaVacia />
    )

    return (
        <>
            {
                lista && lista.map(s => {
                    let { nombre, precio, descripcion, id, img } = s

                    let cant = 1

                    const suma = () => {
                        cant = cant + 1
                        console.log("suma");
                    }

                    const resta = () => {
                        if (cant > 1) {
                            cant = cant - 1
                            console.log("resta");
                        }
                    }

                    const nuevaOrden = () => {
                        let OrdenInfo = {
                            id, nombre, img, precio
                        }
                        setOrden(orden => [...orden, OrdenInfo])
                        console.log(orden, "Añadir al Carrito");
                    }

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
                                    <input disabled type="text" className="form-control" value={cant} />
                                    <button className="btn py-0" onClick={resta}>-</button>
                                </div>

                                <div className="input-group__add-cart">
                                    <button className='btn py-0' onClick={nuevaOrden}>
                                        <p><i className="fa-solid fa-paw user-icon" ></i> Añadir al Carrito</p>
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