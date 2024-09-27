import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import logo from '../images/logo.png'
import { useState } from 'react';
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";

function Voucher() {

    const [data, setData] = useState(
        {
          to: "",
          message:""
    });

    const { 
        user,
        isLoading,
        login
    } = useKindeAuth();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const key = e.target.name;
        const value = e.target.value;
        setData({...data, [key]: value})
    };

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (isLoading ? null : user){

            const message = "Me gustaría regalarle un voucher a "+data.to+" de parte de "+user?.given_name+" "+user?.family_name+" con el mensaje: "+data.message+". Me pasarías info sobre que tratamientos se puede hacer? Gracias!";
            const URI = encodeURIComponent(message).replaceAll('+','%20');

            const voucherElement = document.getElementById("voucher-form");
            voucherElement!.classList.toggle("hidden");
            
            const col2 = document.getElementById('voucher-col2');
            col2!.insertAdjacentHTML('afterbegin', `
            <div id="parent">
        
                <div id="child1">
                    <h2 className='title'>Revisá tu mensaje antes de enviarlo:</h2>
                    <p>${message}</p>
                </div>
        
                <div id="child2">
                    <button id="btn1" class='btn shadow'>Corregir</button>
                    <button id="btn2" class='btn shadow'><a href='https://wa.me/+5492262551283?text=Hola%20Naty!%20+${URI}' target='blank'>Enviar</a></button>
                </div>
        
            </div>`
            );
        
            const removeMessage = () => {
            col2!.removeChild(document.getElementById("parent")!);
            voucherElement!.classList.toggle("hidden");
            }
        
            const sendMessage = () => {
            removeMessage();
            setData({
                to: "",
                message:""
            });
            }
        
            const btn1 = document.getElementById("btn1");
            btn1!.addEventListener("click", function(){
                removeMessage()});
        
            const btn2 = document.getElementById("btn2");
            btn2!.addEventListener("click", function(){
                sendMessage()});
        }
        else {
            login();
        }
    }

    return(
        <Container id="voucher" className="mb-5 p-5">
            <Row xs={1} md={2}>
                <Col id="voucher-img" className="mt-5 p-5">
                    <Image className='shadow rounded' src={logo} fluid />
                </Col>

                <Col id="voucher-col2" className="mt-5 p-5">
                    <div id="voucher-form">
                        <h1 className='title'>Regalá un voucher!</h1>

                        <Form onSubmit={handleSubmit}>
                            <Form.Group 
                                className="m-3 right" 
                            > 
                                <Form.Label>Para:</Form.Label>
                                <Form.Control 
                                    className='form-control w-50' 
                                    type="text" 
                                    name="to"
                                    value={data.to}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group 
                                className="m-3 right" 
                            >
                                <Form.Label>Dejale un mensaje:</Form.Label>
                                <Form.Control 
                                    className='form-control w-50' 
                                    type="text"
                                    name="message"
                                    value={data.message}
                                    onChange={handleChange}
                                    required
                                >
                                </Form.Control>
                            </Form.Group>

                        <Button variant="primary" type="submit" className='btn shadow'>Ok</Button>

                        </Form>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default Voucher