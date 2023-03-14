import {
    getAuth, GoogleAuthProvider, signInWithPopup, signOut,
    createUserWithEmailAndPassword, signInWithEmailAndPassword
} from "firebase/auth";
import { app } from "./firebase";

//Login & Logout

export const auth = getAuth(app)
const authProvider = new GoogleAuthProvider()

export const login = async () => {
    authProvider.setCustomParameters({ prompt: "select_account" })
    const res = await signInWithPopup(auth, authProvider)
    return res.user
}

export const logout = async () => await signOut(auth)

// Register with Email and Password

export const loginEmail = async (email, password) => {

    const res = await createUserWithEmailAndPassword(auth, email, password)
    return res.user
}

// Sign in with Email and Password

export const signWithEmail = async (email, password) => {

    const res = await signInWithEmailAndPassword(auth, email, password)
    return res.user
}
