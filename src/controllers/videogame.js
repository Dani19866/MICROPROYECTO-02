import { db } from '../firebase'
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc, query, where, getDoc } from 'firebase/firestore';
import { getClub, updateClub } from './club';

export async function createVideoGame({ titulo, genero, descripcion, clubName }) {
    // Crea videjuego y lo añade a firestore
    const videoGamesCollection = collection(db, 'videojuegos');
    const data = { titulo, genero, descripcion };
    const videogame = await addDoc(videoGamesCollection, data)

    // Añade el id del juego al club
    const club = await getClub(clubName);
    const clubData = club.data();
    clubData.videogames.push(videogame.id)
    updateClub(club.id, clubData)
}

export async function updateVideoGame(id, { titulo, genero, descripcion }) {
    const videoGamesCollection = collection(db, 'videojuegos');
    const ref = doc(videoGamesCollection, id)
    const data = { titulo, genero, descripcion };
    await setDoc(ref, data);
}

export async function getVideoGames() {
    const videoGamesCollection = collection(db, 'videojuegos');
    const videoGamesSnapshot = await getDocs(videoGamesCollection);

    const videoGames = videoGamesSnapshot.docs.map((doc) => doc.data())

    return videoGames
}

export async function  getVideoGameWithId(id) {
    const docRef = doc(db, "videojuegos", id)
    const docSnap = await getDoc(docRef)
    // console.log(docSnap.data())
    return docSnap // club snapshot
}

async function getVideoGameRef(titulo) {
    const videoGamesCollection = collection(db, 'videojuegos');
    const videoGamesQuery = query(videoGamesCollection, where('titulo', '==', titulo))
    const videoGamesSnapshot = await getDocs(videoGamesQuery)

    if (videoGamesSnapshot.docs.length == 1) {
        const videoGameSnapshot = videoGamesSnapshot.docs[0]
        return videoGameSnapshot.ref // videogame reference
    }
    return null
}

export async function getVideoGame(titulo) {
    const videoGamesCollection = collection(db, 'videojuegos');
    const videoGamesQuery = query(videoGamesCollection, where('titulo', '==', titulo))
    const videoGamesSnapshot = await getDocs(videoGamesQuery)

    if (videoGamesSnapshot.docs.length == 1) {
        const videoGameSnapshot = videoGamesSnapshot.docs[0]
        return videoGameSnapshot // videogame snapshot
    }
    return null
}

// export async function getVideoGamesWithIds(ids) {

// }

export async function removeVideoGame(titulo) {
    // Conseguir referencia al video juego
    const videoGameRef = await getVideoGameRef(titulo);

    // Si no es null borrar el juego
    if (videoGameRef) {
        deleteDoc(videoGameRef)
    }
}

//TODO - getVideoGameRef(id), removeVideoGame(id), getVideoGame(id) etc