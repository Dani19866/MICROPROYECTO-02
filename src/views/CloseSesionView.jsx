import { useEffect } from "react";
import { signOut } from "@firebase/auth";
import { auth } from "../firebase"

export default function CloseSesionView(props) {
    useEffect(() => {
        signOut(auth).then(() => {
            window.location.href = "/login"
            
        }).catch((error) => {
            alert("ERROR: " + error)
        });
    }, [])

    return (
        <div>
            Cerrando sesión...
        </div>
    );
}