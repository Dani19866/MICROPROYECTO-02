import { useEffect } from "react";
import { observerLogin } from "../controllers/authentication";

export default function ProtectedView({children}) {
    useEffect(() => {
        observerLogin()
    }, [])

    return (
        <>{children}</>
    );
}