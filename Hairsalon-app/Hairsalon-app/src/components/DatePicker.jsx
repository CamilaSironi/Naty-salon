import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function DatePicker() {
  return (
    <Container id="turnos" className="p-5">
    <h1>Agendá tu turno:</h1>
    <Form>

      <Form.Group className="m-3" controlId="formDate"> 
        <Form.Label>Elegí una fecha:</Form.Label>
        <Form.Control className='form-control w-50' type="date" />
      </Form.Group>

      <Form.Group className="m-3" controlId="formTime">
          <Form.Label htmlFor="select">Elegí un horario</Form.Label>
          <Form.Select className='form-control w-50' id="select">
            <option>Seleccionar horario</option>
            <option>Mañana</option>
            <option>Tarde</option>
          </Form.Select>
        </Form.Group>

      <Form.Group className="m-3" controlId="formMessage">
        <Form.Label>Dejame tu mensaje:</Form.Label>
        <Form.Control className='form-control w-50 h-75' type="text" placeholder="Escribí tu mensaje..." />
      </Form.Group>

      <Button variant="primary" type="submit">
        Enviar
      </Button>
    </Form>
    </Container>
  )
}

export default DatePicker
