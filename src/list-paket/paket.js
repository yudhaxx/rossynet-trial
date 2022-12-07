import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import './paket.css';
import background from './background.png';
import Card1 from './paket-card1.svg';
import Card2 from './paket-card2.svg';
import Card3 from './paket-card3.svg';
import React, { Component } from 'react';

export default class paket extends Component{
    render(){
    return(
    
            <div id="paket">
                <Container fluid style={{ backgroundImage:`url(${background})`, width: "1442px", height: '756px', backgroundSize: '100%', backgroundRepeat:'no-repeat' }}>
                <h1 className="text-header">Pilihan Paket Internet Rossynet</h1>
                <Container>
                    <Row className="row-card">
                        <Col>
                        <Card style={{ background:`url(${Card1})`, width: "379px", height: "549px",backgroundSize: '100%', backgroundRepeat:'no-repeat'}}>
                            <Button href="https://wa.me/6285212275758?text=Hello%2C%20Saya%20Ingin%20Berlangganan%20Rossynet." target="blank" className="btn-1">Langganan Paket</Button>
                        </Card>
                        </Col>

                        <Col>
                        <Card style={{ background:`url(${Card2})`, width: "379px", height: "549px",backgroundSize: '100%', backgroundRepeat:'no-repeat'}}>
                            <Button href="https://wa.me/6285212275758?text=Hello%2C%20Saya%20Ingin%20Berlangganan%20Rossynet." target="blank" className="btn-1">Langganan Paket</Button>
                        </Card>
                        </Col>

                        <Col>
                        <Card style={{ background:`url(${Card3})`, width: "379px", height: "549px",backgroundSize: '100%', backgroundRepeat:'no-repeat'}}>
                            <Button href="https://wa.me/6285212275758?text=Hello%2C%20Saya%20Ingin%20Berlangganan%20Rossynet." target="blank" className="btn-1">Langganan Paket</Button>
                        </Card>
                        </Col>
                    </Row>
                </Container>

            </Container>
            </div>
            
           
    )
}
}

