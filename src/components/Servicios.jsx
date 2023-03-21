import React, { useContext } from 'react'
import BusquedaVacia from './BusquedaVacia'
import ServiciosCard from './ServiciosCard'
import { servicios } from '../context'

const Servicios = ({ lista }) => {

    const { isLoading } = useContext(servicios.serviciosContext)

    if (lista && lista.length === 0) return (
        <BusquedaVacia />
    )

    return (
        <div className='d-flex flex-row flex-wrap justify-content-center'>
            {
                isLoading && <div className='loader'><span><i className="fa-solid fa-paw"></i></span></div>
            }
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
        </div>
    )
}

export default Servicios