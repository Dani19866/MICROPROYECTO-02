import { onAuthStateChanged, signInWithRedirect, getRedirectResult } from "firebase/auth";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { auth } from "../firebase"

// TO-DO
export function emailRegister() {
    alert("Register with email and password")
}

// TO-DO
export function emailLogin(e) {
    alert("Login with email and password")
    e.preventDefault()
}

export function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
}

// TO-DO
export function githubLogin() {
    alert("Login with github api")
}

// Función: Si un usuario NO logeado intenta entrar en a rutas protegidas ---> Redireccionamiento a "login"
export function observerLogin() {
    onAuthStateChanged(auth, (user) => {
        // https://firebase.google.com/docs/reference/js/auth.user
        if (user) {
            // ...

        } else {
            window.location.href = "/login"
        }
    })
}

// Función: Si un usuario ya logeado intenta entrar en las rutas "login" y "register" ---> Redireccionamiento a "home"
export function observerRegister(){
    onAuthStateChanged(auth, (user) => {
        if (user) {
            window.location.href = "/"
        } else {
            // ...

        }
    })
}