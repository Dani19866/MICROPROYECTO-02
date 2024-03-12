import { db } from '../firebase'
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc, query, where, getDoc } from 'firebase/firestore';

export async function createClub({ nombre, descripcion, videojuegos }) {
    const clubsCollection = collection(db, 'clubs');
    const clubsSnapshot = await getDocs(clubsCollection);
    const data = { nombre: nombre, descripcion: descripcion, videojuegos: videojuegos}
    console.log(clubsSnapshot.size)
    await setDoc(doc(db, 'clubs', `${clubsSnapshot.size}`), data)
    // await addDoc(clubsCollection, data)
}

export async function updateClub(id, { nombre, descripcion, videojuegos }) {
    const clubsCollection = collection(db, 'clubs');
    const ref = doc(clubsCollection, id)
    const data = { nombre: nombre, descripcion: descripcion, videojuegos: videojuegos };
    await setDoc(ref, data);
}

export async function getClubs() {
    const clubsCollection = collection(db, 'clubs');
    const clubsSnapshot = await getDocs(clubsCollection);

    const clubs = clubsSnapshot.docs.map((doc) => doc)

    return clubs
}

export async function getClubsByName(nombre) {
    const clubsCollection = collection(db, 'clubs');
    const clubsQuery = query(clubsCollection, where('nombre', '==', nombre))

    const clubsSnapshot = await getDocs(clubsQuery)
    const clubs = clubsSnapshot.docs.map((doc) => doc)

    return clubs
}

async function getClubRef(nombre) {
    const clubsCollection = collection(db, 'clubs');
    const clubsQuery = query(clubsCollection, where('nombre', '==', nombre))
    const clubsSnapshot = await getDocs(clubsQuery)

    if (clubsSnapshot.docs.length == 1) {
        const clubSnapshot = clubsSnapshot.docs[0]
        return clubSnapshot.ref // club reference
    }
    return null
}

export async function getClub(nombre) {
    const clubsCollection = collection(db, 'clubs');
    const clubsQuery = query(clubsCollection, where('nombre', '==', nombre))
    const clubsSnapshot = await getDocs(clubsQuery)

    if (clubsSnapshot.docs.length == 1) {
        const clubSnapshot = clubsSnapshot.docs[0]
        return clubSnapshot // club snapshot
    }

    return null;
}

export async function  getClubWithId(id) {
    const docRef = doc(db, "clubs", id)
    const docSnap = await getDoc(docRef)
    console.log(docSnap.data().nombre)
    return docSnap // club snapshot
}

export async function removeClub(nombre) {
    // Conseguir referencia al club
    const clubRef = await getClubRef(nombre);

    // Si no es null borrar al club
    if (clubRef) {
        deleteDoc(clubRef)
    }
}

//TODO - getClubRef(id), removeClub(id), etc