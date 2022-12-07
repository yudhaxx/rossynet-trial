import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import './reason.css';
import React from 'react';
import Card1 from './card.svg';
import Card2 from './card-1.svg';
import Card3 from './card-2.svg';
import background from './background.png';

function Reason() {
    return (
        
            <Container fluid style={{ backgroundImage:`url(${background})`, width: "1442px", height: '576px', backgroundSize: '100%', backgroundRepeat:'no-repeat' }}>
            <h1 className="text-header">Kenapa kamu harus pakai rossynet ?</h1>
                <Container>
                <Row className="row-card">
                    <Col>
                    <img className="card-1" alt="" src={Card1} />
                    </Col>

                    <Col>
                    <img className="card-2" alt="" src={Card2} />
                    </Col>

                    <Col>
                    <img className="card-3" alt="" src={Card3} />
                    </Col>
                </Row>

                </Container>
            </Container>

    )
}

export default Reason;