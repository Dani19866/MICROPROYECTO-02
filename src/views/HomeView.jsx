import Navbar from "../components/Navbar"
import Presentation from "../components/Presentation";
import Content from "../components/Content";

export default function HomeView() {
    return (
        <div>
            <Navbar />
            <Content className="m-2">
                <div className="md:w-3/5 md:m-auto">

                    <div>
                        <div className="flex justify-center">
                            <h1 className="font-bold text-4xl">GESTOR DE CLUBS DE JUEGOS DE LA UNIMET</h1>
                        </div>

                        <div className="mt-6">
                            <p>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure soluta itaque libero nulla earum? Numquam eveniet ducimus nam sapiente error saepe minima sunt laudantium, porro debitis sed quisquam autem commodi!
                                Ex, et? Aliquam ipsam earum eos repudiandae nobis qui nulla repellendus error, praesentium ex? Laboriosam magni quibusdam praesentium debitis sequi accusamus delectus commodi soluta dicta excepturi quasi, quod sapiente. Recusandae?
                                Praesentium modi non accusantium voluptatum, illo, a fuga ad nam ipsa sunt fugiat ratione, unde eius dignissimos error aliquam neque dolorem ullam sint. Natus atque saepe perspiciatis quo blanditiis ad!
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
        </div>
    );
}