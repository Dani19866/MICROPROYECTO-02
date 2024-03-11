import { signInWithRedirect, getRedirectResult } from "firebase/auth";
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
    const provider = new GithubAuthProvider();
    signInWithRedirect(auth, provider);
}