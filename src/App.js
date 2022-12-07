import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import Scrollspy from 'react-scrollspy'
import { Container, Navbar, Nav } from "react-bootstrap";

import Home from "./home/home.js";
import Reason from "./reason-page/reason.js";
import Paket from "./list-paket/paket.js";
import Coverage from "./coverage/coverage.js"
import About from "./about/about.js"
import Footer from "./footer/footer.js"
import FloatingButton from "./floating-button/whatsapp-button.js"
import logo from './rossynet-logo.png';




function App() {
  return (
    <div className="App">
      <div>

      <section id="section-1">
      <Home />
      </section>

      <Reason />

      <section id="section-3">
      <Paket />
      </section>

      <section id="section-4">
      <Coverage />
      </section>

      <section id="section-2">
      <About />
      </section>

      <section id="section-5">
      <Footer />
      </section>
     
     
      <FloatingButton />
      </div>


      
   
      <Container className="navbar-container fixed-top"  bg="light">
            <Navbar collapseOnSelect className="navbar shadow-lg " expand="lg" >
            <Navbar.Brand>
                <img className="navbar-logo" alt=" " src={logo}/>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
         
         <Scrollspy
         className="scrollspy " items={ ['section-1', 'section-2', 'section-3', 'section-4', 'section-5'] } 
         currentClassName="isCurrent">
         <Nav className="nav-links  ">
            <li><a href="#section-1" className="nav-link text-light">Beranda</a></li>
            <li><a href="#section-2" className="nav-link text-light">Tentang</a></li>
            <li><a href="#section-3" className="nav-link text-light">Paket</a></li>
            <li><a href="#section-4" className="nav-link text-light">Cek Jangkauan</a></li>
            <li><a href="#section-5" className="nav-link text-light">Hubungi Kami</a></li>
          </Nav>
         </Scrollspy>
          
        </Navbar.Collapse>
            </Navbar>
            
        </Container>
     


    </div>


  );
}

export default App;
