import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "./firebase"

const usuariosCollecion = collection(db, "usuarios")

export const enviarUsuario = async (usuario, id) => await setDoc(doc(usuariosCollecion, id), usuario)

export const detallesUsuario = async (id) => {
    const snapshot = await getDoc(doc(usuariosCollecion, id))
    const usuario = snapshot.data()
    usuario.id = snapshot.id
    return { data: usuario }
}