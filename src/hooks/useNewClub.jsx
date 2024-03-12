import { createClub } from "../controllers/club";

export function useNewClub() {

    async function loadDatas(nombre, descripcion) {
        await createClub({ nombre: nombre, descripcion: descripcion, videojuegos: [] })
        window.location.href = "/clubs"
    }

    function addClub(nombre, descripcion) {
        if (typeof descripcion !== "undefined") {
            loadDatas(nombre, descripcion)
        } else {
            console.log("No se pudo agregar el club")
        }
    }

    return { addClub }
}