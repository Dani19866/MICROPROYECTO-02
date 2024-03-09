import { db } from '../firebase'
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc, query, where } from 'firebase/firestore';

export async function createClub({ name, description, videogames }) {
    const clubsCollection = collection(db, 'clubs');
    const data = { name, description, videogames };
    await addDoc(clubsCollection, data)
}

export async function updateClub(id, { name, description, videogames }) {
    const clubsCollection = collection(db, 'clubs');
    const ref = doc(clubsCollection, id)
    const data = { name, description, videogames };
    await setDoc(ref, data);
}

export async function getClubs() {
    const clubsCollection = collection(db, 'clubs');
    const clubsSnapshot = await getDocs(clubsCollection);

    const clubs = clubsSnapshot.docs.map((doc) => doc.data())

    return clubs
}

async function getClubRef(name) {
    const clubsCollection = collection(db, 'clubs');
    const clubsQuery = query(clubsCollection, where('name', '==', name))
    const clubsSnapshot = await getDocs(clubsQuery)

    if (clubsSnapshot.docs.length == 1) {
        const clubSnapshot = clubsSnapshot.docs[0]
        return clubSnapshot.ref // Movie reference
    }
    return null
}

export async function removeClub(name) {
    // Conseguir referencia al video juego
    const clubRef = await getClubRef(name);

    // Si no es null borrar el juego
    if (clubRef) {
        deleteDoc(clubRef)
    }
}

//TODO - getClubRef(id), removeClub(id), etc