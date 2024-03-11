import { signInWithRedirect, onAuthStateChanged } from "firebase/auth";
import { GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase"

// TO-DO
export function emailRegister(firstname, lastname, email, password) {
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            return 0

        })
        .catch((error) => {
            return error.code
            const errorCode = error.code;
            const errorMessage = error.message;
        });
}

// TO-DO
export function emailLogin(email, password) {

}

export function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
}