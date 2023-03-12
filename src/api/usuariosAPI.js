import { collection, doc, getDoc, setDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase"

const usuariosCollecion = collection(db, "usuarios")

export const enviarUsuario = async (usuario, id) => await setDoc(doc(usuariosCollecion, id), usuario)

export const detallesUsuario = async (id) => {
    const usuarioData = await getDoc(doc(usuariosCollecion, id))
    const usuario = usuarioData.data()
    usuario.id = usuarioData.id
    return { usuario: usuario }
}

export const validarExistencia = async (id) => {
    const usuarioData = await getDoc(doc(usuariosCollecion, id))
    if (usuarioData.exists()) {
        const usuario = usuarioData.data()
        usuario.id = usuarioData.id
        return { usuario: usuario }
    } else {
        return false
    }
}
