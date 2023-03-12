import { collection, doc, getDoc, setDoc, getDocs, addDoc, deleteDoc } from "firebase/firestore";
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

export const enviarMascota = async (_id, mascota) => {
    const mascotasCollecion = collection(db, `usuarios/${_id}/mascotas`)
    await addDoc(mascotasCollecion, mascota)
}

/* await setDoc(doc(mascotasCollecion, mascota.id)) <------- ESTO SIRVE PARA EL UPDATE */

/* export const eliminarMascota = async (_id, _idMascota) => {
    const mascotasCollecion = collection(db, `usuarios/${_id}/mascotas/`)
    await deleteDoc(mascotasCollecion, _idMascota)
} */