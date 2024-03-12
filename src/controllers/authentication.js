import { signInWithRedirect, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc, query, where } from 'firebase/firestore';
import { auth, db } from "../firebase"
import { useEffect, useState } from "react";

export function emailLogin(email, password) {
    signInWithEmailAndPassword(auth, email, password)
}

export function googleLogin() {
    const provider = new GoogleAuthProvider();
    signInWithRedirect(auth, provider);
}

export async function createUser(firstname, lastname, email, uid) {
    const usersCollection = collection(db, 'users');
    const data = {
        "uid": uid,
        "nombre": firstname,
        "apellido": lastname,
        "email": email,

        "videojuego_preferido": "",
        "username": "",
    };
    await addDoc(usersCollection, data)
    return true
}

export function useAuth() {
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
    }, [])
    return currentUser;
}