import { createContext, useState } from "react";
import { onAuthStateChanged } from 'firebase/auth'
import { usuariosAPI, authAPI, mascotasAPI, facturaAPI } from '../api/'

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

    /*----------------------USUARIOS-------------------------------  */

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

    /*----------------------MASCOTAS-------------------------------  */

    const traerMascotas = async (id) => {
        try {
            const mascotasFirebase = await mascotasAPI.traerMascotas(id)
            setMascotas(mascotasFirebase)
        } catch (error) {
            console.log(error);
        }
    }

    const enviarMascota = async (_idU, mascota) => {
        try {
            if (mascota.id) {
                await mascotasAPI.actualizarMascota(_idU, mascota)
            } else {
                await mascotasAPI.crearMascota(_idU, mascota)
            }
        } catch (error) {
            console.log(error);
        }
    }

    const eliminarMascota = async (_idU, _idMascota) => {
        try {
            await mascotasAPI.eliminarMascota(_idU, _idMascota)
        } catch (error) {
            console.log(error);
        }
    }

    /*----------------------FACTURAS-------------------------------  */

    const crearFactura = async (_idU, _factura) => {
        try {
            await facturaAPI.crearFactura(_idU, _factura)
        } catch (error) {
            console.log(error);
        }
    }

    /*----------------------VARIABLES-------------------------------  */

    const variables = {
        enviarUsuario, usuarioLogin,
        usuarioActual, setUsuarioActual,
        traerUsuario,
        traerMascotas, mascotas,
        mascotaActual, setMascotaActual,
        enviarMascota, eliminarMascota,
        crearFactura
    }

    return (
        <usuariosContext.Provider value={variables}>
            {children}
        </usuariosContext.Provider>
    )
}