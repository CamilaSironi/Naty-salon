import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import pic from '../images/me.png'

function About() {
    return(
        <Container id="about" className="p-5">
            <Row>
                <Col className="me-pic mt-5 p-4">
                    <Image className='shadow mb-5 rounded' src={pic} fluid />
                </Col>

                <Col className="mt-5 p-4">
                    <h2 className='text-center'>Hola, soy Naty!</h2>
                    <p>
                        Peluquera de corazón, loca por la belleza y el cuidado del cabello. <br/>
                        Mi amor por la peluquería comenzó desde muy joven, y con los años me fui perfeccionando para que salgas de mi salón sintiéndote espectacular y con una sonrisa de oreja a oreja. <br/>
                        Mis pasiones:<br/>
                        Asesoramiento de Imagen: Juntas vamos a encontrar el look que mejor se adapte a tu personalidad, para que seas 100% vos.<br/>
                        Corte y Peinado: De lo clásico a lo más moderno, lo que sea que te imagines, lo hacemos realidad.<br/>
                        Coloración: Si de color se trata, la rompemos! Desde mechas hasta balayage, pero siempre cuidando tu pelo!<br/>
                        Tratamientos Capilares: Te ofrezco tratamientos personalizados para el cuidar y mejorar la salud del pelo.<br/>
                        ¡Estoy para que te veas y te sientas increíble!  
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default About