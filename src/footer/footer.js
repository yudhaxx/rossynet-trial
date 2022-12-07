import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import './footer.css';
import logo from './logo-footer.svg'


function Footer(){
    return (

            <Container fluid className="container-footer">
                <Container className="footer-content">
                <img className="logo-footer" src={logo} /> 
                <br/>
                <ul className="text-footer mt-5">
                    <a href="https://goo.gl/maps/pc1kF6irdXeRkmdq8" target="blank">Dukuh Sidomulyo, Pengasih, Kulon Progo, Daerah Istimewa Yogyakarta</a>
                    <p>Phone: + (62) 85212275758</p>
                    
                </ul>
            
                </Container>
           
            </Container>

     
    )
}

export default Footer;