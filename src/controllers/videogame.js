import { db } from '../firebase'
import { addDoc, collection, deleteDoc, doc, getDocs, setDoc, query, where } from 'firebase/firestore';
import { getClub, updateClub } from './club';

export async function createVideoGame({ title, genre, description, clubName }) {
    // Crea videjuego y lo añade a firestore
    const videoGamesCollection = collection(db, 'videogames');
    const data = { title, genre, description };
    const videogame = await addDoc(videoGamesCollection, data)

    // añade el id del juego al club
    const club = await getClub(clubName);
    const clubData = club.data();
    clubData.videogames.push(videogame.id)
    updateClub(club.id, clubData)
}

export async function updateVideoGame(id, { title, genre, description }) {
    const videoGamesCollection = collection(db, 'videogames');
    const ref = doc(videoGamesCollection, id)
    const data = { title, genre, description };
    await setDoc(ref, data);
}

export async function getVideoGames() {
    const videoGamesCollection = collection(db, 'videogames');
    const videoGamesSnapshot = await getDocs(videoGamesCollection);

    const videoGames = videoGamesSnapshot.docs.map((doc) => doc.data())

    return videoGames
}

async function getVideoGameRef(title) {
    const videoGamesCollection = collection(db, 'videogames');
    const videoGamesQuery = query(videoGamesCollection, where('title', '==', title))
    const videoGamesSnapshot = await getDocs(videoGamesQuery)

    if (videoGamesSnapshot.docs.length == 1) {
        const videoGameSnapshot = videoGamesSnapshot.docs[0]
        return videoGameSnapshot.ref // videogame reference
    }
    return null
}

export async function getVideoGame(title) {
    const videoGamesCollection = collection(db, 'videogames');
    const videoGamesQuery = query(videoGamesCollection, where('title', '==', title))
    const videoGamesSnapshot = await getDocs(videoGamesQuery)

    if (videoGamesSnapshot.docs.length == 1) {
        const videoGameSnapshot = videoGamesSnapshot.docs[0]
        return videoGameSnapshot // videogame snapshot
    }
    return null
}

export async function removeVideoGame(title) {
    // Conseguir referencia al video juego
    const videoGameRef = await getVideoGameRef(title);

    // Si no es null borrar el juego
    if (videoGameRef) {
        deleteDoc(videoGameRef)
    }
}

//TODO - getVideoGameRef(id), removeVideoGame(id), getVideoGame(id) etc