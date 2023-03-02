import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "./firebase"

const serviciosCollecion = collection(db, "servicios")

export const traerServicios = async () => {
    const snapshot = await getDocs(serviciosCollecion)
    const servicios = []
    snapshot.forEach(s => {
        const servicio = s.data()
        servicio.id = s.id
        servicios.push(servicio)
    });
    return { servicios }
}