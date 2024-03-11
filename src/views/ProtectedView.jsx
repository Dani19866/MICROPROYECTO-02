import Loading from "../components/Loading";
import { useEffect, useState } from "react";
import { auth } from "../firebase"
import { onAuthStateChanged } from "firebase/auth";

export default function ProtectedView({children}) {
    const [loading, setloading] = useState(true)

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            // https://firebase.google.com/docs/reference/js/auth.user
            if (user) {
                setloading(false)
                
            } else {
                window.location.href = "/login";
            }
        })
    }, [])

    return (
        <>{ loading ? <Loading /> : children}</>
    );
}