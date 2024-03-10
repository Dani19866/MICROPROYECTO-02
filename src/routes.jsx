import { createBrowserRouter } from "react-router-dom";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import ClubView from "./views/ClubView";
import ProfileView from "./views/ProfileView";
import ProfileSettingsView from "./views/ProfileSettings";
import SearchClubView from "./views/SearchClubView";
import CloseSesionView from "./views/CloseSesionView"

export const router = createBrowserRouter([
    {
        path: "/",
        element: <HomeView />
    },
    {
        path: "/login",
        element: <LoginView />
    },
    {
        path: "/register",
        element: <RegisterView />
    },
    {
        path: "/profile",
        element: <ProfileView />
    },
    {
        path: "/profile/settings",
        element: <ProfileSettingsView />
    },
    {
        path: "/search",
        element: <SearchClubView />
    },
    {
        path: "/club",
        element: <ClubView />
    },
    {
        path: "/close_sesion",
        element: <CloseSesionView />
    },
])