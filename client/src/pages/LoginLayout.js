import React from "react";
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Footer from '../components/Footer';
import './assets/styles/LoginLayout.css';
import LoginForm from "../components/LoginForm";
import { Link } from "react-router-dom";
import Logo from "./assets/img/viral-effect-white.png";


function LoginLayout(props) {
  
  return (
      <div className="h-100 w-100">
          <Container fluid className="h-100 w-100 login-hero">
                <Row className="h-100 justify-content-center">
                    <Col md={"auto"} className="mt-5 my-md-auto text-center text-md-right d-none d-lg-block fade-in">
                        <img src={Logo} alt="The Viral Effect" className="d-block" style={{width: "500px"}} />
                        <p className="mt-3 login-tagline">Check the symptoms of the economy</p>
                    </Col>
                    <Col xs={"auto"} className="mt-3 my-auto">
                        
                        <LoginForm />
                    </Col>
                </Row>
      </Container>

      <Container className="py-md-5 px-4">
            <Row className="py-5 border-bottom">
              <Col md={"auto"} className="ml-md-4 ml-lg-5">
                <img src="https://via.placeholder.com/150x150?text=Image" alt="" />
              </Col>
              <Col className="mr-md-4 mr-lg-5">
               <h3>The effect is getting to work.</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut velit felis. Fusce consequat viverra placerat. Ut finibus metus ut sem rhoncus volutpat. Quisque mauris odio, fermentum in purus et, iaculis laoreet felis.</p>
               <p className="mb-0"><Link  to={"/signup"}>Sign up for an account</Link></p>
              </Col>
            </Row>
            <Row className="py-5 border-bottom">
                <Col className="ml-md-4 ml-lg-5 order-last order-md-first">
                <h3>Stay informed. Stay safe.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut velit felis. Fusce consequat viverra placerat. Ut finibus metus ut sem rhoncus volutpat. Quisque mauris odio, fermentum in purus et, iaculis laoreet felis.</p>
                <p className="mb-0"><Link  to={"/signup"}>Sign up for an account</Link></p>
                </Col>
                <Col md={"auto"} className="mr-md-4 mr-lg-5 order-first order-md-last">
                    <img src="https://via.placeholder.com/150x150?text=Image" alt="" />
                </Col>
            </Row>
            <Row className="py-5">
                <Col md={"auto"} className="ml-md-4 ml-lg-5">
                    <img src="https://via.placeholder.com/150x150?text=Image" alt="" />
                </Col>
                <Col className="mr-md-4 mr-lg-5">
                <h3>Headline</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ut velit felis. Fusce consequat viverra placerat. Ut finibus metus ut sem rhoncus volutpat. Quisque mauris odio, fermentum in purus et, iaculis laoreet felis.</p>
                <p className="mb-0"><Link to={"/signup"}>Sign up for an account</Link></p>
                </Col>
            </Row>
      </Container>
      <Footer />
      </div>
  );
}

export default LoginLayout;