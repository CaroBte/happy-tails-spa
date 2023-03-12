import { collection, doc, getDoc, setDoc, getDocs } from "firebase/firestore";
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
