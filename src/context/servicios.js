import { createContext, useState } from "react";
import { serviciosAPI } from '../api/'

export const serviciosContext = createContext()

export const ServiciosProvider = ({ children }) => {

    const [servicios, setServicios] = useState(null)
    const [ordenes, setOrdenes] = useState([])
    const [total, setTotal] = useState(0)
    const [isLoading, setIsLoading] = useState(false)

    const traerServicios = async () => {
        setIsLoading(true)
        setServicios(null)
        let res = await serviciosAPI.traerServicios()
        setIsLoading(false)
        setServicios(res.servicios)
    }

    const variables = {
        servicios, traerServicios, setServicios,
        ordenes, setOrdenes,
        total, setTotal,
        isLoading
    }

    return (
        <serviciosContext.Provider value={variables}>
            {children}
        </serviciosContext.Provider>
    )



} 