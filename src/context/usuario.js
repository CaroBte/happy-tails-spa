import { createContext, useState } from "react";
import { onAuthStateChanged } from 'firebase/auth'
import { usuariosAPI, authAPI } from '../api/'

export const usuariosContext = createContext()
export const UsuariosProvider = ({ children }) => {

    const [usuarioLogin, setUsuarioLogin] = useState()
    const [usuarioActual, setUsuarioActual] = useState()

    onAuthStateChanged(authAPI.auth, (_user) => {
        if (_user) {
            setUsuarioLogin(_user)
        } else {
            setUsuarioActual(null)
        }
    })

    const enviarUsuario = async (_usuario) => {
        try {
            await usuariosAPI.enviarUsuario(_usuario, _usuario.id)
        } catch (error) {
            console.log(error);
        }
    }

    const traerUsuario = async (id) => {
        try {
            const usuarioFirebase = await usuariosAPI.detallesUsuario(id)
            setUsuarioActual(usuarioFirebase)
        } catch (error) {
            console.log(error);
        }
    }

    const variables = {
        enviarUsuario, usuarioLogin,
        usuarioActual, setUsuarioActual,
        traerUsuario
    }

    return (
        <usuariosContext.Provider value={variables}>
            {children}
        </usuariosContext.Provider>
    )
}