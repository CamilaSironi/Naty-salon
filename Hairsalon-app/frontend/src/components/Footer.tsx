import Container from 'react-bootstrap/Container';
import {Facebook} from 'react-bootstrap-icons';
import {Whatsapp} from 'react-bootstrap-icons';
import {Instagram} from 'react-bootstrap-icons';

function Footer() {
    return(
        <Container id='contact' className="footer p-4 bg-transparent shadow d-flex flex-row" fluid>
            <h2>Contactame:</h2>
            <div>
                <a href='https://www.facebook.com/natalia.baran.3?locale=es_LA' target='_blank' className='footer-item'><Facebook size={42} className='ps-2 pe-2'/></a>
                <a href='https://www.instagram.com/natysalon2023/' target='_blank' className='footer-item'><Instagram size={42} className='ps-2 pe-2'/></a>
                <a href='https://wa.me/+5492262485631?text=Hola%20Naty!' target='_blank' className='footer-item'><Whatsapp size={42} className='ps-2 pe-2'/></a>
            </div>
        </Container>
    )
}

export default Footer