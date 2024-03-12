import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import { auth } from "../firebase"
import { onAuthStateChanged } from "firebase/auth";

export default function ProtectedViewForLogged({ children }) {
    const [loading, setloading] = useState(true)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                window.location.href = "/";
            } else {
                setloading(false)
            }
        })
    }, [])

    return (
        <>{loading ? <Loading /> : children}</>
    );
}