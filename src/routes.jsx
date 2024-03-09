import { createBrowserRouter } from "react-router-dom";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";
import ClubView from "./views/ClubView";
import ProfileView from "./views/ProfileView";
import SearchClubView from "./views/SearchClubView";

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
        path: "/search",
        element: <SearchClubView />
    },
    {
        path: "/club",
        element: <ClubView />
    },
])