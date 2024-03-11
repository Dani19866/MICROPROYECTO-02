//import NavbarButton from "./NavbarButton"
//import NavbarButtonProfile from "./NavbarButtonProfile";
import { useEffect } from "react";
import Logo from "../assets/user.png"
import { Avatar, Dropdown, Navbar as NavbarFlowbite } from 'flowbite-react';
import { userToken } from "../controllers/authentication";

export default function Navbar() {
    async function profilePhoto() {
        const user = await userToken()
        console.log(user);
    }

    useEffect(() => {
        profilePhoto()
    }, [])


    return (
        <NavbarFlowbite>
            <NavbarFlowbite.Brand href="https://www.unimet.edu.ve/wp-content/uploads/2023/07/Logo-footer.png">
                <img src="https://www.unimet.edu.ve/wp-content/uploads/2023/07/Logo-footer.png" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
            </NavbarFlowbite.Brand>

            <div className="flex md:order-2">
                <Dropdown
                    arrowIcon={true}
                    inline
                    label={
                        <Avatar alt="User settings" img="" rounded />
                    }
                >
                    <Dropdown.Header>
                        <span className="block text-sm">Pepito Perez</span>
                        <span className="block truncate text-sm font-medium">correo@correo.unimet.edu.ve</span>
                    </Dropdown.Header>
                    <Dropdown.Item href="/profile">Ver perfil</Dropdown.Item>
                    <Dropdown.Item href="/profile/settings">Configuraciones</Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item href="/close_sesion">Cerrar sesión</Dropdown.Item>
                </Dropdown>
                <NavbarFlowbite.Toggle />
            </div>
            <NavbarFlowbite.Collapse>
                <NavbarFlowbite.Link className="md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" href="/">INICIO</NavbarFlowbite.Link>
                <NavbarFlowbite.Link className="md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" href="/clubs">TODOS LOS CLUBS</NavbarFlowbite.Link>
            </NavbarFlowbite.Collapse>
        </NavbarFlowbite>
    );
}