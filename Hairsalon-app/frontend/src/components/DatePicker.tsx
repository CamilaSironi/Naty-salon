import {Container, Button, Form, Row, Col} from 'react-bootstrap';
import { useState } from 'react';
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";

function DatePicker() {

  const [data, setData] = useState(
    {
      date: "",
      time: "",
      message:""
    });

    const { 
      isLoading,
      user, 
      login
  } = useKindeAuth();

  const handleChange = (e: React.ChangeEvent<any>) => {
    const key = e.target.name;
    const value = e.target.value;
    setData({...data, [key]: value})
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (isLoading ? null : user){
        const message = "Me gustaría reservar un turno si tenés libre para el dia "+data.date+" a la "+data.time+". "+data.message;
        const URI = encodeURIComponent(message).replaceAll('+','%20');

        (document.getElementById("ok-btn")! as HTMLButtonElement).disabled = true;

        const col2 = document.getElementById('form-col-2');
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

        </div>`)

        const removeMessage = () => {
          col2!.removeChild(document.getElementById("parent")!);
          (document.getElementById("ok-btn")! as HTMLButtonElement).disabled = false;
        }
    
        const sendMessage = () => {
          removeMessage();
          setData({
            date: "",
            time: "",
            message:""
          })
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


  return (
    <Container id="turnos" className="mt-5 mb-5 p-5">
    <h1 className='title'>Agendá tu turno:</h1>

        <Row xs={1} md={2}>
            <Col className="form-item">
                <Form onSubmit={handleSubmit}>
                    <Form.Group 
                      className="m-3 left"
                    > 
                      <Form.Label>Elegí una fecha:</Form.Label>
                      <Form.Control 
                        className='form-control w-75' 
                        type="date" 
                        name="date"
                        value={data.date}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>

                    <Form.Group 
                      className="m-3 left" 
                    >
                        <Form.Label htmlFor="select">Elegí un horario</Form.Label>
                        <Form.Select 
                          className='form-control w-75' 
                          id="select"
                          name="time"
                          value={data.time}
                          onChange={handleChange}
                          required
                        >
                          <option value='' disabled></option>
                          <option value='mañana'>Mañana</option>
                          <option value='tarde'>Tarde</option>
                        </Form.Select>
                      </Form.Group>

                    <Form.Group 
                      className="m-3 left" 
                    >
                      <Form.Label>Dejame tu mensaje: (opcional)</Form.Label>
                      <Form.Control 
                        className='form-control w-75 h-75' 
                        type="text" 
                        name="message"
                        value={data.message}
                        onChange={handleChange}
                        placeholder="Escribí tu mensaje..." 
                      />
                    </Form.Group>

                    <Button id="ok-btn" variant="primary" type="submit" className='btn shadow'>Ok</Button>
                    </Form>
            </Col>
            <Col id="form-col-2" className="p-5"></Col>
            </Row>

    
    </Container>
  )
}

export default DatePicker
