import { createContext, useState } from "react";
import { serviciosAPI } from '../api/'

export const serviciosContext = createContext()

export const ServiciosProvider = ({ children }) => {

    const [servicios, setServicios] = useState(null)
    const [ordenes, setOrdenes] = useState([])

    const traerServicios = async () => {
        setServicios(null)
        let res = await serviciosAPI.traerServicios()
        setServicios(res.servicios)
    }

    const variables = {
        servicios, traerServicios, setServicios, ordenes, setOrdenes
    }

    return (
        <serviciosContext.Provider value={variables}>
            {children}
        </serviciosContext.Provider>
    )



} 