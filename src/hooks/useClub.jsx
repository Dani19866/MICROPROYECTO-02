import { useEffect, useState } from "react";
import { createClub, getClub, getClubWithId, getClubs, getClubsByName } from "../controllers/club";

export function useClub(id) {

    const [ club, setClub ] = useState(null)

    async function cargarDato() {
        const data = await getClubWithId(id)
        // console.log(data.data().nombre)
        setClub(await data)
    }

    useEffect(() => {
        cargarDato()
    }, [])

    // async function findClub(id) {
    //     const club = await getClubWithId(id)
    //     // setClub(club)
    //     return club.data()
    // }

    const isLoading = club === null;

    return { club, setClub, isLoading }
}