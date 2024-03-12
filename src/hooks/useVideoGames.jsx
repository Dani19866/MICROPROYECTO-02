import { getVideoGameWithId } from "../controllers/videogame"
import { useEffect, useState } from "react"

export function useVideoGames(ids) {
    const [videogames, setVideoGames] = useState([])

    async function cargarData() {
        // console.log(ids.length)
        var videojuegos = []
        // console.log(ids.length)
        for (let index = 0; index < (await ids).length; index++) {
            const videogame = await getVideoGameWithId(ids[index])
            // console.log(videogame)
            videojuegos.push(videogame)
        }
        // console.log("here")
        // console.log(videojuegos.map((videogame) => {videogame.id}))
        setVideoGames(await videojuegos)
    }

    useEffect(() => {
        cargarData()
    }, [])

    const isLoading = videogames == []

    if (!isLoading) {
        videogames.map((videogame) => console.log(videogame.data().titulo))

        // console.log(hi)
    }

    return { videogames, setVideoGames, isLoading }
}