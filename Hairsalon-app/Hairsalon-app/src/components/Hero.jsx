import Ratio from 'react-bootstrap/Ratio';
import video from '../images/welcome.mp4'

function Hero() {
    return(
        <Ratio aspectRatio="16x9">
            <video autoPlay muted loop type="video/mp4" className="embed-responsive embed-responsive-16by9">
                <source src={video} />
            </video>
        </Ratio>
    )
}

export default Hero