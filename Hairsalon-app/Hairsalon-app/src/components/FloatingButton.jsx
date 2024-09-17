import Button from 'react-bootstrap/Button';
import {Whatsapp} from 'react-bootstrap-icons';

function FloatingButton() {
    return(
        <Button href="https://wa.me/+5492262485631?text=Hola%20Naty!" target='blank' className='floating-btn shadow'><Whatsapp size={42} className='floating-icon p-2'/></Button>
    )
}

export default FloatingButton