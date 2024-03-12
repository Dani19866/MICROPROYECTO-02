import { getVideoGameWithId } from "../controllers/videogame"
import { useEffect, useState } from "react"

export function useVideoGames(ids) {
    const [videogames, setVideoGames] = useState([])

    async function cargarData() {
        var videojuegos = []
        for (let index = 0; index < (await ids).length; index++) {
            const videogame = await getVideoGameWithId(ids[index])
            videojuegos.push(videogame)
        }
        setVideoGames(await videojuegos)
    }

    useEffect(() => {
        cargarData()
    }, [])

    const isLoading = videogames == []

    if (!isLoading) {
        videogames.map((videogame) => console.log(videogame.data().titulo))
    }

    return { videogames, setVideoGames, isLoading }
}