import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import './about.css';
import background from './background.png';
import headerlogo from './logo-about.svg';

function About(){
    return(
        <Container fluid style={{ backgroundImage:`url(${background})`, width: "1442px", height: '398px', backgroundSize: '100%', backgroundRepeat:'no-repeat'}}>
            <img className="header-logo mt-5" src={headerlogo}/>

            <Container className="text-about mt-4">
                <p>Rossynet adalah private broadband internet service provider dengan 9 tahun experience.</p>
                <p>Di era new normal ini kebutuhan koneksi internet dengan kapasitas yang memadai menjadi hal yang penting dalam menunjang beragam aktivitas sehari - hari. Kebutuhan internet kamu semakin meningkat? Jangan ragu untuk segera upgrade layanan ROSSYNET kamu ya. ROSSYNET menyediakan pilihan paket internet yang pastinya terjangkau, andal, dan tanpa batas.</p>
            </Container>
        </Container>

    )
}


export default About;