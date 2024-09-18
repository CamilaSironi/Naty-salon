import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

function DatePicker() {

  const [data, setData] = useState(
    {
      date: "",
      time: "",
      message:""
    });

  /*const getValidationState = () => { //validar que inicio sesion
      const length = this.state.value.length;
      if (length > 10) return 'success';
      if (length > 5) return 'warning';
      if (length > 0) return 'error';
      return null;

      esto va abajo de form.label: <ControlLabel>esto es el mensaje:{validationState}</ControlLabel>
    }*/

  const handleChange = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setData({...data, [key]: value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const text = "Me gustaría reservar un turno si tenés libre para el dia "+data.date+" de "+data.time+" "+data.message;
    const URI = encodeURIComponent(text).replaceAll('+','%20');
    
    fetch("https://wa.me/+5492262551283?text=Hola%20Naty!%20"+URI, {
        mode: 'cors',
        credentials: 'include',
        headers: {
        'Access-Control-Allow-Origin': 'https://wa.me',
        'Access-Control-Allow-Credentials': 'true',
        },
        methods: 'OPTIONS'
      })
      .then(
        console.log(text)
        //mensaje de respuesta
      );

    setData({
      date: "",
      time: "",
      message:""
    })
  }

  return (
    <Container id="turnos" className="mt-5 mb-5 p-5">
    <h1 className='title'>Agendá tu turno:</h1>

    <Form onSubmit={handleSubmit}>

      <Form.Group 
        className="m-3" 
        //validationState={this.getValidationState()}
      > 
        <Form.Label>Elegí una fecha:</Form.Label>
        <Form.Control 
          className='form-control w-50' 
          type="date" 
          name="date"
          value={data.date}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group 
        className="m-3" 
        //validationState={this.getValidationState()}
      >
          <Form.Label htmlFor="select">Elegí un horario</Form.Label>
          <Form.Select 
            className='form-control w-50' 
            id="select"
            name="time"
            value={data.time}
            onChange={handleChange}
          >
            <option>Seleccionar horario</option>
            <option>Mañana</option>
            <option>Tarde</option>
          </Form.Select>
        </Form.Group>

      <Form.Group 
        className="m-3" 
        //validationState={this.getValidationState()}
      >
        <Form.Label>Dejame tu mensaje:</Form.Label>
        <Form.Control 
          className='form-control w-50 h-75' 
          type="text" 
          name="message"
          value={data.message}
          onChange={handleChange}
          placeholder="Escribí tu mensaje..." 
        />
      </Form.Group>

      <Button variant="primary" type="submit" className='btn'>
        Enviar
      </Button>
    </Form>
    </Container>
  )
}

export default DatePicker
