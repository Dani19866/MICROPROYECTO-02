import { db } from '../firebase'
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc, query, where } from 'firebase/firestore';

export async function createClub({ nombre, descripcion, videojuegos }) {
    const clubsCollection = collection(db, 'clubs');
    const data = { nombre, descripcion, videojuegos };
    await addDoc(clubsCollection, data)
}

export async function updateClub(id, { nombre, descripcion, videojuegos }) {
    const clubsCollection = collection(db, 'clubs');
    const ref = doc(clubsCollection, id)
    const data = { nombre, descripcion, videojuegos };
    await setDoc(ref, data);
}

export async function getClubs() {
    const clubsCollection = collection(db, 'clubs');
    const clubsSnapshot = await getDocs(clubsCollection);

    const clubs = clubsSnapshot.docs.map((doc) => doc.data())

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

export async function removeClub(nombre) {
    // Conseguir referencia al club
    const clubRef = await getClubRef(nombre);

    // Si no es null borrar al club
    if (clubRef) {
        deleteDoc(clubRef)
    }
}

//TODO - getClubRef(id), removeClub(id), etc