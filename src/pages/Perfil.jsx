import React, { useContext } from 'react'
import { Login, Usuario } from '../components'
import { usuario } from '../context'

import "../styles/Perfil.sass"

const Perfil = () => {

    const { usuarioActual } = useContext(usuario.usuariosContext)

    if (usuarioActual) return <Usuario />

    return (
        <>
            <Login />
        </>
    )
}

export default Perfil