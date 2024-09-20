import logo from '../images/logo.png'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
    return (
    <Navbar className="navbar p-1 bg-white">
      <Container id="header" fluid="md">

        <Navbar.Brand href="#home">
            <img src={logo} className="logo img-fluid float-start" alt="logo"/>
        </Navbar.Brand>

        <NavDropdown title="MENU" className="basic-nav-dropdown float-end p-2">
              <NavDropdown.Item href="#about">Sobre mí</NavDropdown.Item>
              <NavDropdown.Item href="#services">Servicios</NavDropdown.Item>
              <NavDropdown.Item href="#turnos">Turnos</NavDropdown.Item>
              <NavDropdown.Item href="#voucher">Voucher</NavDropdown.Item>
              <NavDropdown.Item href="#contact">Contacto</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#login">Ingresar</NavDropdown.Item>
        </NavDropdown>

      </Container>
    </Navbar>
  );
}

export default Header