import { useEffect, useState } from "react";
import { createClub, getClubs, getClubsByName } from "../controllers/club";

export function useClubs() {

    const [clubs, setClubs] = useState(null)

    async function cargarDatos() {
        const data = await getClubs()
        console.log(data)
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