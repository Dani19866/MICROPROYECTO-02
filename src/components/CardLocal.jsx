import { Card } from 'antd'
import { RightOutlined } from '@ant-design/icons'

export default function CardLocal(props) {

    function cardType() {
        const element = props.element;
        if (props.type == "clubs") {
            return (
                <div>
                    {/* <Space direction="vertical" size={26}> */}
                    <Card title={element.nombre} extra={<a className='text-primary' href="#">Más<RightOutlined /></a>}  className="text-center w-80 m-2 bg-secondary" >
                        <p className='text-justify'>Descripción: {element.descripcion}</p>
                    </Card>
                    {/* </Space> */}
                </div>
            );
        } else {
            return <div>not found</div>
        }
    }

    return (
        <div>
            {cardType()}
        </div>
    );
}