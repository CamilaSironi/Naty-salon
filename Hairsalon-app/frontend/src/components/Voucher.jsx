import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import logo from '../images/logo.png'
import { useState } from 'react';

function Voucher() {

    const [data, setData] = useState(
        {
          to: "",
          message:""
        });

    /*const getValidationState = () => { 

    }*/

    const handleChange = (e) => {
        const key = e.target.name;
        const value = e.target.value;
        setData({...data, [key]: value})
    };

    async function handleSubmit(e) {
        e.preventDefault();
        
        const text = "Me gustaría regalarle un voucher a "+data.to+" con el mensaje: "+data.message+" Me pasarías info sobre que tratamientos se puede hacer? Gracias!";
        const URI = encodeURIComponent(text).replaceAll('+','%20');
        
        const res = await fetch("https://wa.me/+5492262551283?text=Hola%20Naty!%20"+URI, 
        {
            mode: 'no-cors'
        })
        console.log(res);
    
        setData({
          to: "",
          message:""
        })
      }

    return(
        <Container id="voucher" className="mt-5 mb-5 p-5 border">
            <Row>
                <Col className="p-5">
                    <Image className='shadow mb-5 rounded' src={logo} fluid />
                </Col>

                <Col className="p-5">
                    <h1 className='title'>Regalá un voucher!</h1>

                    <Form onSubmit={handleSubmit}>
                        <Form.Group 
                            className="m-3" 
                            //validationState={this.getValidationState()}
                        > 
                            <Form.Label>Para:</Form.Label>
                            <Form.Control 
                                className='form-control w-50' 
                                type="text" 
                                name="to"
                                value={data.to}
                                onChange={handleChange}
                            />
                        </Form.Group>

                        <Form.Group 
                            className="m-3" 
                            //validationState={this.getValidationState()}
                        >
                            <Form.Label>Dejale un mensaje:</Form.Label>
                            <Form.Control 
                                className='form-control w-50' 
                                type="text"
                                name="message"
                                value={data.message}
                                onChange={handleChange}
                            >
                            </Form.Control>
                        </Form.Group>

                    <Button variant="primary" type="submit" className='btn'>
                        Enviar
                    </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Voucher