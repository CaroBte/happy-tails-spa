import React, { useContext, useEffect, useState } from 'react'
import { Servicios } from '../components';
import { serviciosContext } from '../context/servicios'
import "../styles/BuscarNosotros.sass"

const Buscar = () => {

    const { traerServicios, servicios, isLoading } = useContext(serviciosContext)

    const [serviciosLocal, setServiciosLocal] = useState(null)
    const [filtrado, setFiltrado] = useState()

    useEffect(() => {
        if (!servicios) {
            traerServicios()
        }
        setServiciosLocal(servicios)
        setFiltrado(servicios)
    }, [servicios])


    const removerAcentos = (_str) => {
        return _str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    }

    const handleSearch = (event) => {

        const busqueda = removerAcentos(event.target.value).toLowerCase()

        let servicioFiltrado = serviciosLocal.filter((servicio) => removerAcentos(servicio.nombre.toLowerCase()).includes(busqueda) || removerAcentos(servicio.descripcion.toLowerCase()).includes(busqueda))

        setFiltrado(servicioFiltrado)
    }



    return (
        <>
            {
                isLoading && <div className='loader'><span><i className="fa-solid fa-paw"></i></span></div>
            }
            <div className="screen row justify-content-end gx-0">
                <div className='d-flex align-items-baseline px-4 mt-4 col-md-9'>
                    <i className="user-icon h3 fa-solid fa-magnifying-glass"></i>
                    <h5 className='mx-2'>Buscar</h5>
                </div>
                <div className="input-group p-4 searcher">
                    <input type="text" className="form-control input-search py-3" onChange={event => handleSearch(event)}
                        placeholder="Busca un servicio para tu mascota" />
                    <button className="btn btn-search input-group-text">
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <div className='container-cards d-flex flex-wrap justify-content-around col-md-9'>
                    <Servicios lista={filtrado} />
                </div>
            </div>
        </>
    )
}

export default Buscar