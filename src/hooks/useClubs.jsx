import { useEffect, useState } from "react";
import { createClub, getClub, getClubWithId, getClubs, getClubsByName } from "../controllers/club";

export function useClubs() {

    const [clubs, setClubs] = useState(null)

    async function cargarDatos() {
        const data = await getClubs()
        setClubs(await data)
    }

    useEffect(() => {
        cargarDatos()
    }, [])

    function addClub(nombre, descripcion) {
        createClub({ nombre: nombre, descripcion: descripcion, videojuegos: [] })
        cargarDatos();
    }

    async function searchClubs(nombre) {
        if (nombre != "") {
            setClubs(await getClubsByName(nombre))
        } else {
            cargarDatos()
        }
    }

    

    const isLoading = clubs === null;

    return { clubs, isLoading, addClub, searchClubs }
}