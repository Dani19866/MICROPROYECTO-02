import { useEffect, useState } from "react";
import { useAuth } from "../controllers/authentication";

export function useProfileData() {
    const currentUser = useAuth();
    const [photo, setPhoto] = useState();
    const [displayname, setdisplayname] = useState()
    const [email, setemail] = useState()
    
    function getProfilePhoto() {
        if (currentUser?.photoURL) {
            setPhoto(currentUser.photoURL);
        }
    }

    function getDisplayName() {
        if (currentUser?.displayName) {
            setdisplayname(currentUser.displayName);
        }
    }

    function getEmail() {
        if (currentUser?.email) {
            setemail(currentUser.email);
        }
    }

    useEffect(() => {
        getProfilePhoto()
        getDisplayName()
        getEmail()

    }, [currentUser])

    return { currentUser, photo, displayname, email }
}