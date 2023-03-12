import { createContext, useState } from "react";
import { onAuthStateChanged } from 'firebase/auth'
import { usuariosAPI, authAPI, mascotasAPI } from '../api/'

export const usuariosContext = createContext()
export const UsuariosProvider = ({ children }) => {

    const [usuarioLogin, setUsuarioLogin] = useState()
    const [usuarioActual, setUsuarioActual] = useState()
    const [mascotas, setMascotas] = useState([])
    const [mascotaActual, setMascotaActual] = useState()

    onAuthStateChanged(authAPI.auth, (_user) => {
        if (_user) {
            setUsuarioLogin(_user)
        } else {
            setUsuarioActual(null)
        }
    })

    const enviarUsuario = async (_usuario, id) => {
        try {
            await usuariosAPI.enviarUsuario(_usuario, id)
        } catch (error) {
            console.log(error);
        }
    }

    const traerUsuario = async (id) => {
        try {
            const usuarioFirebase = await usuariosAPI.detallesUsuario(id)
            setUsuarioActual(usuarioFirebase.usuario)
        } catch (error) {
            console.log(error);
        }
    }

    /*----------------------CRUD MASCOTAS-------------------------------  */

    const enviarMascota = async (_id, mascota) => {
        try {

            await mascotasAPI.enviarMascota(_id, mascota)

        } catch (error) {
            console.log(error);
        }
    }


    const traerMascotas = async (id) => {
        try {
            const mascotasFirebase = await mascotasAPI.traerMascotas(id)
            setMascotas(mascotasFirebase)
        } catch (error) {
            console.log(error);
        }
    }

    const variables = {
        enviarUsuario, usuarioLogin,
        usuarioActual, setUsuarioActual,
        traerUsuario,
        traerMascotas, mascotas,
        mascotaActual, setMascotaActual,
        enviarMascota
    }

    return (
        <usuariosContext.Provider value={variables}>
            {children}
        </usuariosContext.Provider>
    )
}