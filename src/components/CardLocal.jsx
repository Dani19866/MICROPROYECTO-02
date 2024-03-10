import { Card } from 'antd'

export default function CardLocal(props) {

    function cardType() {
        const element = props.element;
        if (props.type == "club") {
            return (
                <div>
                    {/* <Space direction="vertical" size={26}> */}
                    <Card title={element.nombre} extra={<a className='text-primary' href="#">Más</a>}  className="text-center w-80 m-2 bg-secondary" >
                        <p className='text-justify'>Descripción: {element.descripcion}</p>
                    </Card>
                    {/* </Space> */}
                </div>
            );
        } else {
            return <club>not club</club>
        }
    }

    return (
        <div>
            {cardType()}
        </div>
    );
}