import { useState } from "react";
import Content from "../components/Content";
import { emailLogin, googleLogin } from "../controllers/authentication";
import ProtectedViewForLogged from "./ProtectedViewForLogged";

export default function LoginView() {
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    function goRegister() {
        window.location.href = "/register"
    }

    function login(e) {
        e.preventDefault()
        emailLogin(email, password)
    }

    return (
        <ProtectedViewForLogged>
            <Content>
                <div className="flex justify-center items-center h-screen">
                    <div className="bg-white h-3/5 w-[350px] border border-gray-200 p-4 relative">

                        {/* Logo */}
                        <div className="absolute p-4">
                            <a href="." className="flex items-center space-x-3 rtl:space-x-reverse">
                                <img src="https://www.unimet.edu.ve/wp-content/uploads/2023/07/Logo-footer.png" className="h-8" alt="Flowbite Logo" />
                            </a>
                        </div>

                        {/* Bienvenida */}
                        <div className="flex justify-center mt-16 mb-6">
                            <h2 className="text-2xl font-bold secundary_color">INICIAR SESIÓN</h2>
                        </div>

                        {/* Formulario */}
                        <div>
                            <form action="" onSubmit={login}>
                                <div className="mb-6">
                                    <label htmlFor="email" className="block mb-2 text-sm text-gray-900 dark:text-white font-bold">CORREO ELECTRÓNICO</label>
                                    <input onChange={(e) => {setemail(e.target.value)}} type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="pepito.perez@correo.unimet.edu.ve" required />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="password" className="block mb-2 text-sm font-bold text-gray-900 dark:text-white">CONTRASEÑA</label>
                                    <input onChange={(e) => {setpassword(e.target.value)}} type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="******************" required />
                                </div>

                                <div>
                                    <button onClick={emailLogin} type="submit" className="text-white mb-6 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">ENTRAR</button>
                                </div>
                            </form>
                        </div>


                        {/* API's de logeo */}
                        <div>
                            <div>
                                <p className="font-semibold mb-4">Recuerda que también puedes...</p>
                            </div>

                            <div>
                                {/* Google */}
                                <div className="flex justify-center mb-4">
                                    <button onClick={googleLogin} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">INICIAR SESIÓN CON GOOGLE</button>
                                </div>
                            </div>
                        </div>


                        {/* Registrarse */}
                        <div>
                            <div>
                                <p className="font-semibold mb-4">Si no tienes cuenta puedes registrarte <span className="text-blue-500 underline hover:cursor-pointer" onClick={goRegister}>aquí</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Content>
        </ProtectedViewForLogged>
    );
}