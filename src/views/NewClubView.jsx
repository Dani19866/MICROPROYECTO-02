import Navbar from "../components/Navbar";
import Content from "../components/Content";
import { useNewClub } from "../hooks/useNewClub";
import { Form, Input, Button } from "antd";
import { useState } from "react";

export default function NewClubView() {

    // const [form] = Form.useForm()

    const [formValues, setFormValues] = useState({
        nombre: "",
        descripcion: ""
    })

    const { addClub } = useNewClub()

    // const [isLoading, setIsLoading] = useState(true)

    function handleInputChange(e) {
        // const { name, value } = e.target
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
        console.log(formValues)
    }


    function handleSubmit(e) {
        e.preventDefault();
        addClub( formValues.nombre, formValues.descripcion )
    }

    const formItemLayout = {
        labelCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 6,
            },
        },
        wrapperCol: {
            xs: {
                span: 24,
            },
            sm: {
                span: 14,
            },
        },
    };

    return (
        <div>
            <Navbar />
            <Content className="flex justify-center">
                <Form {...formItemLayout} variant="filled" onSubmitCapture={handleSubmit} style={{ maxWidth: 700 }} className=" w-96 min-w-52">
                    <Form.Item label="Nombre" rules={[{ required: true, message: 'Por favor llenar!' }]}>
                        <Input name="nombre" onChange={handleInputChange} value={formValues.nombre} className=" rounded-md border-0 bg-[#f0f0f0]  focus:border-[1px]" />
                    </Form.Item>
                    <Form.Item
                        label="Descripcion"
                        rules={[{ required: true, message: 'Por favor llenar!' }]}
                    >
                        <Input.TextArea
                            value={formValues.descripcion}
                            onChange={handleInputChange}
                            name="descripcion"
                        />
                    </Form.Item>
                    <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
                        <Button className="bg-primary" type="primary" htmlType="submit">
                            Agregar Club
                        </Button>
                    </Form.Item>
                </Form>
            </Content>
        </div>
    );
}