import Navbar from "../components/Navbar"
import Presentation from "../components/Presentation";
import Content from "../components/Content";
import ProtectedView from "../views/ProtectedView"

export default function HomeView() {
    return (
        <ProtectedView>
            <Navbar />
            <Content className="m-2">
                <div className="md:w-3/5 md:m-auto">

                    <div>
                        <div className="flex justify-center">
                            <h1 className="font-bold text-4xl">GESTOR DE CLUBS DE JUEGOS DE LA UNIMET</h1>
                        </div>

                        <div className="mt-6">
                            <p className="mb-6">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad, cupiditate. Ipsa porro laboriosam voluptatum quidem ipsam ducimus nisi dolorum possimus dicta repellat, fugiat velit odio libero amet, accusamus doloribus doloremque.
                                Quos, dolor accusamus? Praesentium, porro alias quam incidunt beatae ducimus tempore perferendis recusandae minima dolor voluptatibus doloribus ipsam sequi voluptatem assumenda unde quia reprehenderit laborum eos repellat voluptate. Nobis, quaerat.
                            </p>
                            <p className="mb-6">
                                Quos, dolor accusamus? Praesentium, porro alias quam incidunt beatae ducimus tempore perferendis recusandae minima dolor voluptatibus doloribus ipsam sequi voluptatem assumenda unde quia reprehenderit laborum eos repellat voluptate. Nobis, quaerat.
                            </p>
                            <p className="mb-6">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid impedit magni facere odit praesentium alias atque numquam voluptate libero voluptatum? Possimus dolores at rerum, ut laborum quis nulla quas sit.
                                Explicabo blanditiis magni at placeat, cupiditate dolorem id quia, praesentium, odio veritatis autem libero nihil odit fugit. Eius culpa, nulla veniam earum a aliquam consequuntur repellendus consequatur nobis consectetur optio?
                                Quisquam optio sunt recusandae soluta distinctio ad maiores ratione sequi. Aperiam alias quas id non consequatur perferendis nihil, illum ad cum! Veritatis voluptatum blanditiis nihil eveniet iste ipsum. Deleniti, illum.
                            </p>
                        </div>
                    </div>

                    <hr className="my-5"/>

                    <div>
                        <div>
                            <h2 className="font-semibold text-xl">¡Si eres nuevo, te presentamos estos CLUBS INTERESANTES para empezar con este mundo de los VIDEOJUEGOS!</h2>
                        </div>

                        <div>
                            <Presentation url="" image="https://elucabista.com/wp-content/uploads/2022/07/IMG_4233.jpg" title="Club de homofóbicos"/>
                            <Presentation url="" image="https://elucabista.com/wp-content/uploads/2022/07/IMG_4233.jpg" title="Club de racistas"/>
                            <Presentation url="" image="https://elucabista.com/wp-content/uploads/2022/07/IMG_4233.jpg" title="Club de xenófobos"/>
                            <Presentation url="" image="https://elucabista.com/wp-content/uploads/2022/07/IMG_4233.jpg" title="Club de chilenos y peruanos (asco)"/>
                        </div>
                    </div>

                </div>
            </Content>
        </ProtectedView>
    );
}