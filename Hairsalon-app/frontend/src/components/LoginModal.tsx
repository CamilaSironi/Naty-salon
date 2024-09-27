import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useKindeAuth} from "@kinde-oss/kinde-auth-react";
import Container from 'react-bootstrap/esm/Container';


function LoginModal() {

    const [show, setShow] = useState(false);

    const { 
        login, 
        register
    } = useKindeAuth();

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
     

  return (
        
        <>
            <Button variant="primary" onClick={handleShow}>
                Ingresar
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>     
                <Modal.Title>Ingresá o registrate</Modal.Title>
                </Modal.Header>
                    <Modal.Body className="p-2 flex-col">
                        <Container className="p-2">
                            <p>Ya tenés una cuenta? </p>
                            <Button className='btn shadow' onClick={() => login()} type="button">Ingresar</Button>
                        </Container>
                        <Container className="p-2">
                            <p>Si todavía no tenés una cuenta: </p>
                            <Button className='btn shadow' onClick={() => register()} type="button">Registrarme</Button>
                        </Container>
                    </Modal.Body>
                <Modal.Footer>
                <Button className='btn shadow' onClick={handleClose}>
                    Cerrar
                </Button>
                </Modal.Footer>
            </Modal>
    </>
  )
}

export default LoginModal
