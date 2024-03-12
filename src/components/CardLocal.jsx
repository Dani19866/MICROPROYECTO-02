import { Card } from 'antd'
import { RightOutlined } from '@ant-design/icons'
import VideoGamesCards from './VideoGamesCards'

export default function CardLocal(props) {

    // function cardType() {
        const element = props.element;

        // useEffect(() => {

        // }, [])

        


        if (props.type == "clubs") {
            return (
                <div>
                    <Card title={element.data().nombre} extra={<a className='text-primary' href={`clubs/${element.id}`}>Más<RightOutlined /></a>} className="text-center w-80 m-2 bg-secondary" >
                        <p className='text-justify'>Descripción: {element.data().descripcion}</p>
                    </Card>
                </div>
            );
        } else if (props.type == "club") {



            return (
                <div>
                    {/* <Card className='w-full' title={element.nombre}> */}
                        <p>Descripción: {element.descripcion}</p>
                        <VideoGamesCards element={element.videojuegos} />
                    {/* </Card> */}

                </div>
            );
        } else {
            console.log(props)
            return (
                <div>
                    <p>Name: {props.name}</p>
                    <Card className=' bg-primary' size='small' title={element.data().titulo}>
                        <p>Descripcion: {element.data().descripcion}</p>
                        <p>Genero: {element.data().genero}</p>
                    </Card>
                </div>
            );
        }
    // }

    // return (
    //     <div>
    //         {cardType()}
    //     </div>
    // );
}