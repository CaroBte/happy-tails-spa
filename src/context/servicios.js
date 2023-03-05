import { createContext, useState } from "react";
import { serviciosAPI } from '../api/'

export const serviciosContext = createContext()

export const ServiciosProvider = ({ children }) => {

    const [servicios, setServicios] = useState(null)
    const [ordenes, setOrdenes] = useState([])
    const [total, setTotal] = useState(0)
    const [subtotales, setSubtotales] = useState([0])

    const traerServicios = async () => {
        setServicios(null)
        let res = await serviciosAPI.traerServicios()
        setServicios(res.servicios)
    }

    const variables = {
        servicios, traerServicios, setServicios,
        ordenes, setOrdenes,
        subtotales, setSubtotales,
        total, setTotal
    }

    return (
        <serviciosContext.Provider value={variables}>
            {children}
        </serviciosContext.Provider>
    )



} 