import React, { useContext, useEffect } from 'react'
import { CarritoVacio, CarritoCard } from '../components'
import { servicios } from '../context'

const Carrito = () => {

    const { setOrdenes, ordenes, setTotal, total, subtotales, } = useContext(servicios.serviciosContext)

    const actualizarTotal = () => {
        const resTotal = subtotales.reduce((totalAc, valorAct) => totalAc = totalAc + valorAct)
        setTotal(resTotal)
    }

    const suma = (_id) => {
        let orden = ordenes.find((o) => o.id === _id)
        orden.cantidad = orden.cantidad + 1
        setTotal(total + parseInt(orden.precio * 1000))
    }

    const resta = (_id) => {
        let orden = ordenes.find((o) => o.id === _id)
        if (orden.cantidad > 1) {
            orden.cantidad = orden.cantidad - 1
            setTotal(total - parseInt(orden.precio * 1000))
        }
    }

    const eliminarOrden = (_id) => {
        let ordenesFiltradas = ordenes.filter((o) => o.id !== _id)
        setOrdenes(ordenesFiltradas)
    }

    useEffect(() => {
        actualizarTotal()
    }, [subtotales])

    if (ordenes && ordenes.length === 0) return (
        <>
            <div className='screen row justify-content-end gx-0'>
                <div className="d-flex align-items-baseline px-4 mt-4 col-md-9">
                    <i className="user-icon h3 fa-solid fa-cart-shopping"></i>
                    <h5 className='mx-2'>Carrito</h5>
                </div>
                <div className='col-md-9'>
                    <CarritoVacio />
                </div>
            </div>
        </>
    )

    return (
        <>
            <div className='screen row justify-content-end gx-0'>
                <div className="d-flex align-items-baseline px-4 mt-4 col-md-9">
                    <i className="user-icon h3 fa-solid fa-cart-shopping"></i>
                    <h5 className='mx-2'>Carrito</h5>
                </div>
                <div className='col-md-9'>
                    {ordenes && ordenes.map(o => {
                        return (
                            <CarritoCard key={o.id}
                                nombre={o.nombre}
                                img={o.img}
                                precio={o.precio}
                                cantidad={o.cantidad}
                                id={o.id}
                                suma={suma}
                                resta={resta}
                                eliminarOrden={eliminarOrden}
                            />
                        )
                    })}
                </div>
                <div className='col-md-4'>
                    <div className="total-cart d-flex justify-content-between py-2 m-4 ">
                        <h3>Total:</h3>
                        <h3>{total}</h3>
                    </div>
                    <button className='btn btn-logout mx-2 mb-2 mx-md-1'>Comprar!</button>
                </div>
            </div>
        </>
    )
}

export default Carrito