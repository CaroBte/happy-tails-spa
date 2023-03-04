import React, { useContext, useState } from 'react'
import BusquedaVacia from './BusquedaVacia'
import ServiciosCard from './ServiciosCard'

const Servicios = ({ lista }) => {

    if (lista && lista.length === 0) return (
        <BusquedaVacia />
    )

    return (
        <>
            {
                lista && lista.map(s => {
                    return (
                        < ServiciosCard nombre={s.nombre}
                            precio={s.precio}
                            descripcion={s.descripcion}
                            img={s.img}
                            key={s.id}
                            id={s.id} />
                    )
                })}
        </>
    )
}

export default Servicios