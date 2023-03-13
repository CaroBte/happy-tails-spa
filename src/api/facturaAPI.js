import { collection, doc, getDocs, addDoc, deleteDoc } from "firebase/firestore";
import { db } from "./firebase"

export const crearFactura = async (_idU, factura) => {
    const facturasCollecion = collection(db, `usuarios/${_idU}/facturas`)
    await addDoc(facturasCollecion, factura)
}