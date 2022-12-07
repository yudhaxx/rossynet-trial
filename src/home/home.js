import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import './home.css';
import {Link} from 'react-scroll'
 
import Background from './background.png';
import imghome from './image-home.svg';
import rectangle from './rectangle.png';
import React, { Component } from 'react'




export default class home extends Component {
  render(){
return (


  <div style={{ backgroundImage:`url(${Background})` , width: "1442px", height: '832px', backgroundSize: '100%', backgroundRepeat:'no-repeat' }}>
    <Container fluid className="home">
     
        <Container className="home-page">
        <Row>
          <Col>
          <img className="rec justify-content-start" alt=""  src={rectangle} />
          <h1 className="text-home1">Internet Tepat Untuk Keluarga</h1>
          <h1 className="text-home2">#InternetCepatTanpaBatas</h1>
          
      
 
          <Link activeClass="active" to="paket" spy={true} smooth={true}><Button className="button-home">Lihat Paket Internet</Button></Link>
   
          
     
            
          </Col>
          
          <Col>
          <img className="home-img" alt="" src={imghome} />
          </Col>
        </Row>

        </Container> 




        </Container>
  </div>


)
}
}
