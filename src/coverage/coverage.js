import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import './coverage.css';
import background from './background.png'

    function Coverage () {
    return(
        <Container fluid style={{ backgroundImage:`url(${background})`, width: "1442px", height: '556px', backgroundSize: '100%', backgroundRepeat:'no-repeat'}}>
            <h1 className="text-header">Area yang sudah dijangkau</h1>
            <Container className="container-list-group">
                <ul className="list-group list-group-horizontal align-items-center justify-content-center gap-3 mt-5 ">
                    <li className="list-group-item border-0">-Kecamatan Pengasih</li>
                    <li className="list-group-item border-0">-Kecamatan Nanggulan</li>
                    <li className="list-group-item border-0">-Kecamatan Girimulyo</li>
                </ul>
                <p className="text-white-50 mt-4 fst-italic">* Atau Hubungi Kontak Yang Tersedia Untuk Memastikan Jangkauan</p>
                
            </Container>
             

       
        </Container>
        
    )
}

export default Coverage;