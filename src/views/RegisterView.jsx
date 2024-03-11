import Content from "../components/Content";

export default function RegisterView() {
    return (
        <div>
            <Content className="flex justify-center items-center h-screen">
                <div className="w-[1200px] h-[650px] bg-[#efefef] rounded-lg grid grid-cols-2 relative">

                    {/* Logo */}
                    <div className="absolute p-4">
                        <a href="." className="flex items-center space-x-3 rtl:space-x-reverse">
                            <img src="https://www.unimet.edu.ve/wp-content/uploads/2023/07/Logo-footer.png" className="h-8" alt="Flowbite Logo" />
                        </a>
                    </div>

                    {/* Bienvenida */}
                    <div className="bg-[#efefef] rounded-l-lg p-24">
                        <div className="flex justify-center">
                            <h2 className="secundary_color font-bold text-4xl">GESTIONA LOS CLUBS LOS CUALES PERTENECES</h2>
                        </div>
                        <div>
                            <p className="body pt-4">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deserunt vero aspernatur numquam! Officia, recusandae pariatur? Maxime voluptate laboriosam consequuntur iure facere, itaque inventore autem deleniti vitae quia ab totam.
                            </p>

                            <p className="body pt-4">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores deserunt vero aspernatur numquam! Officia, recusandae pariatur? Maxime voluptate laboriosam consequuntur iure facere, itaque inventore autem deleniti vitae quia ab totam.
                            </p>
                        </div>

                    </div>


                    {/* Formulario */}
                    <div className="bg-[#12182d] rounded-r-lg rounded-l-xl p-24">

                        <div className="flex justify-center">
                            <h2 className="secundary_color font-bold text-4xl">CREAR UNA CUENTA</h2>
                        </div>

                        {/* Botones de registro */}
                        <div className="grid grid-cols-2 mt-4">
                            {/* Google */}
                            <div className="flex justify-center">
                                <button type="button" className="text-white bg-blue-600 p-2 w-full">Registrarse con Google</button>
                            </div>

                            {/* Github */}
                            <div className="flex justify-center">
                                <button type="button" className="text-white bg-black p-2 w-full">Registrarse con Github</button>
                            </div>
                        </div>

                        {/* Form */}
                        <div>
                            <form className="w-full max-w-lg pt-4">

                                {/* Full name */}
                                <div className="flex flex-wrap -mx-3">
                                    <div className="w-full md:w-1/2 px-3 md:mb-0">
                                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-first-name">
                                            Nombre
                                        </label>
                                        <input className="appearance-none block w-full bg-[#384b92] border-[#384b92] text-white border  rounded py-3 px-4 mb-3 leading-tight" id="grid-first-name" type="text" placeholder="Jane" />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
                                            Apellido
                                        </label>
                                        <input className="appearance-none block w-full bg-[#384b92] border-[#384b92] text-white border rounded py-3 px-4 leading-tight focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="flex flex-wrap -mx-3">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-email">
                                            Correo
                                        </label>
                                        <input className="appearance-none block w-full bg-[#384b92] border-[#384b92] text-white border rounded py-3 px-4 mb-3 leading-tight focus:border-gray-500" id="grid-email" type="text" placeholder="pepito.perez@correo.unimet.edu.ve" />
                                    </div>
                                </div>

                                {/* Password */}
                                <div className="flex flex-wrap -mx-3">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-password">
                                            Contraseña
                                        </label>
                                        <input className="appearance-none block w-full bg-[#384b92] border-[#384b92] text-white border rounded py-3 px-4 mb-3 leading-tight focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                                    </div>
                                </div>

                                {/* Confirm password */}
                                <div className="flex flex-wrap -mx-3">
                                    <div className="w-full px-3">
                                        <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-comfirm_password">
                                            Confirmar contraseña
                                        </label>
                                        <input className="appearance-none block w-full bg-[#384b92] border-[#384b92] text-white border rounded py-3 px-4 mb-3 leading-tight focus:border-gray-500" id="grid-comfirm_password" type="password" placeholder="******************" />
                                    </div>
                                </div>

                                {/* Registrarse */}
                                <div className="text-white">
                                    <button type="submit" className="p-2 font-semibold w-full hover:bg-[#1d2749]">REGISTRARSE</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </Content>
        </div>
    );
}