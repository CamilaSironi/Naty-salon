import Modal from 'react-bootstrap/Modal';
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";
import {BoxArrowRight} from 'react-bootstrap-icons';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Container from 'react-bootstrap/esm/Container';

function LogoutModal() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true);
        console.log(user);
    }

    const { 
        user,
        logout } = useKindeAuth();

  return (
    <>
        <Button variant="primary" onClick={handleShow}>
            Salir <BoxArrowRight/>
        </Button>
        <Modal 
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>     
                <Modal.Title>Salir</Modal.Title>
                </Modal.Header>
                    <Modal.Body className="p-2 flex-col">
                        <Container className="p-2">
                            <p className="text-sm">Ingresaste como {user?.given_name} {user?.family_name}</p>
                            <p className="text-sm">¿Segura que querés salir?</p>
                        </Container>
                    </Modal.Body>
                <Modal.Footer>
                <Button className='btn shadow m-2' onClick={logout}>
                    Salir <BoxArrowRight/>
                </Button>
                <Button className='btn shadow' onClick={handleClose}>
                    Cerrar
                </Button>
                </Modal.Footer>
        </Modal>
    </>
  )
}

export default LogoutModal
