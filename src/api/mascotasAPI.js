import { collection, doc, setDoc, getDocs, addDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase"

export const traerMascotas = async (_id) => {
    const mascotasCollecion = collection(db, `usuarios/${_id}/mascotas`)
    const snapshot = await getDocs(mascotasCollecion)
    const mascotas = []
    snapshot.docs.forEach(m => {
        const mascota = m.data()
        mascota.id = m.id
        mascotas.push(mascota)
    })
    return mascotas
}

export const crearMascota = async (_idU, mascota) => {
    const mascotasCollecion = collection(db, `usuarios/${_idU}/mascotas`)
    await addDoc(mascotasCollecion, mascota)
}

export const actualizarMascota = async (_idU, _mascota) => {
    const mascotasCollecion = collection(db, `usuarios/${_idU}/mascotas`)
    await setDoc(doc(mascotasCollecion, _mascota.id), _mascota)
}

export const eliminarMascota = async (_idU, _idM) => {
    const mascotasCollecion = collection(db, `usuarios/${_idU}/mascotas/`)
    await deleteDoc(doc(mascotasCollecion, _idM))
}  