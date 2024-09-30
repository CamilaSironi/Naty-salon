import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import lavado from '../images/lavado.jpg';
import secado from '../images/secado.jpg';
import corte from '../images/corte.jpg';
import color1 from '../images/color1.jpg';
import color2 from '../images/color2.jpg';
import color3 from '../images/color3.jpg';
import color4 from '../images/color4.jpg';
import peinado1 from '../images/peinado1.jpg';
import peinado2 from '../images/peinado2.jpg';
import peinado3 from '../images/peinado3.jpg';
import peinado4 from '../images/peinado4.jpg';
import peinado5 from '../images/peinado5.jpg';
import peinado6 from '../images/peinado6.jpg';
import peinado7 from '../images/peinado7.jpg';
import peinado8 from '../images/peinado8.jpg';
import tratam1 from '../images/tratam1.jpg';
import tratam2 from '../images/tratam2.jpg';
import tratam3 from '../images/tratam3.png';
import tratam4 from '../images/tratam4.jpg';

function Services() {
    return(
        <Container id="services" className="p-5">
            <h1 className='title text-center'>Servicios</h1>
            <Row xs={1} md={2}>
                <Col className="service-item lavado text-end mt-5 p-5">
                    <h3>LAVADO</h3>
                    <p  className='left'>
                    Lavo tu cabello con productos de alta calidad para asegurarme de que esté limpio y manejable.<br/>
                    Este paso incluye un masaje relajante del cuero cabelludo.
                    </p>
                </Col>
                <Col className="service-item  mt-5  mb-5 p-5">
                    <Image className='shadow rounded' src={lavado} fluid />
                </Col>
            </Row>

            <Row xs={1} md={2}> 
                <Col className="service-item mt-5 mb-5 p-5">
                    <Image className='shadow rounded' src={secado} fluid />
                </Col>
                <Col className="service-item text-start mt-5 p-5">
                    <h3>SECADO</h3>
                    <p className='right'>
                        El secado profesional es la clave para lograr un acabado pulido y duradero.<br/>
                        Aplico productos para proteger tu cabello del calor y mejorar su textura y brillo y luego lo seco logrando el estilo deseado, ya sea liso, ondulado o con volumen.        
                    </p>
                </Col>
            </Row>

            <Row xs={1} md={2}>
                <Col className="service-item corte text-end mt-5 p-5">
                    <h3>CORTE</h3>
                    <p className='left'>
                        Con un buen corte de pelo logramos un look fresco y renovado.<br/>
                        Para mí, cada corte de pelo es un proceso personalizado y detallado, para realzar tus rasgos, adaptarse a tu tipo de pelo y a tu estilo de vida.
                    </p>
                </Col>
                <Col className="service-item mt-5 mb-5 p-5">
                    <Image className='shadow rounded' src={corte} fluid />
                </Col>
            </Row>

            <Row xs={1} md={2}>
                <Col className="service-item mt-5 mb-5 p-5">
                    <Carousel>
                        <Carousel.Item>
                            <Image className='shadow rounded' src={color1} fluid />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className='shadow rounded' src={color2} fluid />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className='shadow rounded' src={color3} fluid />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className='shadow rounded' src={color4} fluid />
                        </Carousel.Item>
                    </Carousel> 
                </Col>
                <Col className="service-item color text-start mt-5 p-5">
                    <h3>COLOR</h3>
                    <p className='right'>
                        Según tus preferencias y objetivos, discutimos las opciones de color, las tendencias actuales y cómo el color elegido complementará tu estilo.<br/>
                        Después evaluamos la salud de tu cabello y lo preparamos adecuadamente para el proceso de coloración, asegurando resultados óptimos y duraderos.
                    </p>
                </Col>
            </Row>

            <Row xs={1} md={2}>
                <Col className="service-item peinados text-end mt-5 p-5">
                    <h3>PEINADOS</h3>
                    <p className='left'>
                        Ya sea un peinado elegante, un estilo moderno o un look natural, vamos a encontrar el estilo perfecto.<br/>
                        Finalizamos el peinado con productos específicos que aseguran que se mantenga perfecto durante todo el evento y te doy consejos sobre cómo mantenerlo y posibles retoques.
                    </p>
                </Col>
                <Col className="service-item mt-5 mb-5 p-5">
                    <Carousel>
                        <Carousel.Item>
                            <Image className='shadow rounded' src={peinado1} fluid />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className='shadow rounded' src={peinado2} fluid />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className='shadow rounded' src={peinado3} fluid />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className='shadow rounded' src={peinado4} fluid />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className='shadow rounded' src={peinado5} fluid />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className='shadow rounded' src={peinado6} fluid />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className='shadow rounded' src={peinado7} fluid />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className='shadow rounded' src={peinado8} fluid />
                        </Carousel.Item>
                    </Carousel> 
                </Col>
            </Row>

            <Row xs={1} md={2}>
                <Col className="service-item mt-5 mb-5 p-5">
                    <Carousel>
                        <Carousel.Item>
                            <Image className='shadow rounded' src={tratam1} fluid />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className='shadow rounded' src={tratam2} fluid />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className='shadow rounded' src={tratam3} fluid />
                        </Carousel.Item>
                        <Carousel.Item>
                            <Image className='shadow rounded' src={tratam4} fluid />
                        </Carousel.Item>
                    </Carousel> 
                </Col>
                <Col className="service-item text-start mt-5 p-5">
                    <h3>TRATAMIENTOS</h3>
                    <div className='right'>
                        <p>
                            Cada tratamiento es personalizado según las necesidades específicas de cada pelo, ya sea:
                        </p>
                        <ul>
                            <li>Suavizar y alisar el cabello, reducir el frizz y mejorar su manejabilidad.</li>
                            <li>Realzar el brillo natural de tu cabello, dejándolo más luminoso y saludable.</li>
                            <li>Restaurar la humedad en el cabello seco y dañado, dejándolo suave, flexible y revitalizado.</li>
                            <li>Aportar nutrientes esenciales al cabello, fortaleciendo y mejorando su textura.</li>
                            <li>Reparar el daño causado por tratamientos químicos, calor y factores ambientales.</li>
                            <li>Reconstruir la estructura interna del cabello, mejorando su resistencia y elasticidad.</li>
                        </ul>
                    </div>
                </Col>
            </Row>
        </Container>
        
    )
}

export default Services