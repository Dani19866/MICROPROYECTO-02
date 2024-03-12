import { signInWithRedirect, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc, query, where } from 'firebase/firestore';
import { auth, db } from "../firebase"
import { useEffect, useState } from "react";

function generateRandomUsername(firstName, lastName) {
    const initials = (firstName.charAt(0) + lastName.charAt(0)).toLowerCase();
    const randomString = Math.random().toString(36).substring(2, 20);
    const username = initials + randomString;
    return username;
}

export async function getUserByEmail(email) {
    const userCollections = collection(db, 'users');
    const userQuery = query(userCollections, where('email', '==', email))
    const userSnapshot = await getDocs(userQuery)

    if (userSnapshot.empty) {
        return null;
    }

    const user = userSnapshot.docs[0].data(); 
    return user;
}

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
        "username": generateRandomUsername(firstname, lastname),

        "videojuego_preferido": "",
    };
    await addDoc(usersCollection, data)
    window.location.href = "/"
}

export function useAuth() {
    const [currentUser, setCurrentUser] = useState();
    useEffect(() => {
        const unsub = onAuthStateChanged(auth, user => setCurrentUser(user));
        return unsub;
    }, [])
    return currentUser;
}