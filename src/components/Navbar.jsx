import NavbarButton from "./NavbarButton"
import NavbarButtonProfile from "./NavbarButtonProfile";
import Logo from "../assets/user.png"

export default function Navbar() {
    return (
        <div>
            <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md rounded-md m-2">
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto p-4">

                    {/* LOGO DE NAVBAR */}
                    <a href="." className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://www.unimet.edu.ve/wp-content/uploads/2023/07/Logo-footer.png" className="h-8" alt="Flowbite Logo" />
                    </a>

                    {/* BOTONES DE PERFIL */}
                    <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">

                        {/* Ver perfil */}
                        <button type="button" className="flex text-sm rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600" id="user-menu-button" aria-expanded="false" data-dropdown-toggle="user-dropdown" data-dropdown-placement="bottom">
                            <span className="sr-only">Open user menu</span>
                            <img className="w-8 h-8 rounded-full" src={Logo} alt="user photo" />
                        </button>

                        {/* Botones de perfil */}
                        <div className="z-50 hidden my-4 text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600" id="user-dropdown">
                            <div className="px-4 py-3">
                                {/* Nombre de la cuenta */}
                                <span className="block text-sm text-gray-900 dark:text-white">Pepito Perez</span>

                                {/* Correo de la cuenta */}
                                <span className="block text-sm  text-gray-500 truncate dark:text-gray-400">correo@correo.com</span>
                            </div>

                            {/* Botones */}
                            <ul className="py-2" aria-labelledby="user-menu-button">
                                <li> <NavbarButtonProfile title="Ver perfil" href="profile" /> </li>
                                <li> <NavbarButtonProfile title="Configuraciones" href="profile/settings" /> </li>
                                <li> <NavbarButtonProfile title="Cerrar sesión" href="/close_sesion" /> </li>
                            </ul>
                        </div>
                    </div>

                    {/* BOTONES DE NAVBAR */}
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-user">
                        <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li><NavbarButton title="INICIO" href="/"/> </li>
                            <li><NavbarButton title="TODOS LOS CLUBS" href="/clubs"/> </li>
                            <li><NavbarButton title="BUSCAR CLUBS" href="/search"/> </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}