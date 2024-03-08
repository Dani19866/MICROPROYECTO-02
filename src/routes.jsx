import { createBrowserRouter } from "react-router-dom";
import HomeView from "./views/HomeView";
import LoginView from "./views/LoginView";
import RegisterView from "./views/RegisterView";

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
])