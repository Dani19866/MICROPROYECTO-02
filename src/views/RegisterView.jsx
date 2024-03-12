import { useState } from "react";
import { auth } from "../firebase"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { googleLogin, createUser } from "../controllers/authentication";
import { Button, Modal } from 'flowbite-react';
import { HiOutlineExclamationCircle } from 'react-icons/hi';
import Content from "../components/Content";

export default function RegisterView() {
    const [firstname, setfirstname] = useState(null)
    const [lastname, setlastname] = useState(null)
    const [email, setemail] = useState(null)
    const [password, setpassword] = useState(null)
    const [confirmpassword, setconfirmpassword] = useState(null)

    const [openModal, setOpenModal] = useState(false);
    const [emailAlreadyModal, setemailAlreadyModal] = useState(false);
    const [invalidEmailModal, setinvalidEmailModal] = useState(false);
    const [invalidPasswordModal, setinvalidPasswordModal] = useState(false);
    const [uknownModal, setuknownModal] = useState(false);

    async function handleRegister(e) {
        e.preventDefault()
        if (password === confirmpassword) {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password)
                const result = await createUser(firstname, lastname, email, userCredential.user.uid)

            } catch (error) {
                if (error.code == "auth/email-already-in-use") {
                    setemailAlreadyModal(true)
                }
                else if (error.code == "auth/invalid-email") {
                    setinvalidEmailModal(true)
                }
                else if (error.code == "auth/invalid-password" || error.code == "auth/weak-password") {
                    setinvalidPasswordModal(true)
                }
                else {
                    setuknownModal(true)
                }
            }

        } else {
            setOpenModal(true)
        }
    }

    return (
        <Content className="grid h-screen place-items-center">
            <div className="w-[1200px] h-[650px] bg-[#efefef] rounded-lg grid grid-cols-2 relative">

                {/* Logo */}
                <div className="absolute p-4">
                    <a href="." className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://www.unimet.edu.ve/wp-content/uploads/2023/07/Logo-footer.png" className="h-8" alt="UNIMET Logo" />
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

                    {/* API's de registro */}
                    <div className="mt-4">
                        {/* Google */}
                        <div className="flex justify-center">
                            <button onClick={googleLogin} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Registrarse con Google</button>
                        </div>
                    </div>

                    {/* Form */}
                    <div>
                        <form className="w-full max-w-lg pt-4" onSubmit={handleRegister}>

                            {/* Full name */}
                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full md:w-1/2 px-3 md:mb-0">
                                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-first-name">
                                        Nombre
                                    </label>
                                    <input onChange={(e) => setfirstname(e.target.value)} required className="appearance-none block w-full bg-[#384b92] border-[#384b92] text-white border  rounded py-3 px-4 mb-3 leading-tight" id="grid-first-name" type="text" placeholder="Jane" />
                                </div>
                                <div className="w-full md:w-1/2 px-3">
                                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-last-name">
                                        Apellido
                                    </label>
                                    <input onChange={(e) => setlastname(e.target.value)} required className="appearance-none block w-full bg-[#384b92] border-[#384b92] text-white border rounded py-3 px-4 leading-tight focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe" />
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-email">
                                        Correo
                                    </label>
                                    <input onChange={(e) => setemail(e.target.value)} required className="appearance-none block w-full bg-[#384b92] border-[#384b92] text-white border rounded py-3 px-4 mb-3 leading-tight focus:border-gray-500" id="grid-email" type="email" placeholder="pepito.perez@correo.unimet.edu.ve" />
                                </div>
                            </div>

                            {/* Password */}
                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-password">
                                        Contraseña
                                    </label>
                                    <input onChange={(e) => setpassword(e.target.value)} required className="appearance-none block w-full bg-[#384b92] border-[#384b92] text-white border rounded py-3 px-4 mb-3 leading-tight focus:border-gray-500" id="grid-password" type="password" placeholder="******************" />
                                </div>
                            </div>

                            {/* Confirm password */}
                            <div className="flex flex-wrap -mx-3">
                                <div className="w-full px-3">
                                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="grid-comfirm_password">
                                        Confirmar contraseña
                                    </label>
                                    <input onChange={(e) => setconfirmpassword(e.target.value)} required className="appearance-none block w-full bg-[#384b92] border-[#384b92] text-white border rounded py-3 px-4 mb-3 leading-tight focus:border-gray-500" id="grid-comfirm_password" type="password" placeholder="******************" />
                                </div>
                            </div>

                            {/* Registrarse */}
                            <div className="text-white">
                                <button type="submit" className="p-2 font-semibold w-full hover:bg-[#1d2749]">REGISTRARSE</button>

                                <Modal show={openModal} size="md" onClose={() => setOpenModal(false)} popup>
                                    <Modal.Header />
                                    <Modal.Body>
                                        <div className="text-center">
                                            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                                Por favor, revisa que las contraseñas sean iguales!
                                            </h3>
                                            <div className="flex justify-center gap-4">
                                                <Button color="blue" onClick={() => setOpenModal(false)}>
                                                    OK
                                                </Button>
                                            </div>
                                        </div>
                                    </Modal.Body>
                                </Modal>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Popups */}
                <Modal show={emailAlreadyModal} size="md" onClose={() => setemailAlreadyModal(false)} popup>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="text-center">
                            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                El correo electrónico introducido ya está en uso!
                            </h3>
                            <div className="flex justify-center gap-4">
                                <Button color="blue" onClick={() => setemailAlreadyModal(false)}>
                                    OK
                                </Button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>

                <Modal show={invalidEmailModal} size="md" onClose={() => setinvalidEmailModal(false)} popup>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="text-center">
                            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                El correo electrónico introducido NO es válid!
                            </h3>
                            <div className="flex justify-center gap-4">
                                <Button color="blue" onClick={() => setinvalidEmailModal(false)}>
                                    OK
                                </Button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>

                <Modal show={invalidPasswordModal} size="md" onClose={() => setinvalidPasswordModal(false)} popup>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="text-center">
                            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                La contraseña introducida no es válida!
                            </h3>
                            <div className="flex justify-center gap-4">
                                <Button color="blue" onClick={() => setinvalidPasswordModal(false)}>
                                    OK
                                </Button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>

                <Modal show={uknownModal} size="md" onClose={() => setuknownModal(false)} popup>
                    <Modal.Header />
                    <Modal.Body>
                        <div className="text-center">
                            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                                Se ha producido un error desconocido! Inténtelo de nuevo...
                            </h3>
                            <div className="flex justify-center gap-4">
                                <Button color="blue" onClick={() => setuknownModal(false)}>
                                    OK
                                </Button>
                            </div>
                        </div>
                    </Modal.Body>
                </Modal>

            </div>
        </Content>
    );
}