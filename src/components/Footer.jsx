import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

    const Footer = () => {
        return (
            <footer className="bg-dark text-white mt-5 py-4">
                <Container>
                    <Row className="text-center text-md-start">
                        <Col md={4} className="mb-3">
                            <h5 className="">Contacto:</h5>
                            <p className="mb-1"> Bialet Massé, Córdoba, Argentina</p>
                            <p className="mb-1"> 0351 772-3549</p>
                            <p className="mb-1"> vinospunilla@gmail.com</p>
                        </Col>
                        <Col md={4} className="mb-3">
                            <h5 className=" d-flex justify-content-center ">Seguinos en:</h5>
                            <div className="d-flex justify-content-center  gap-3 fs-4">
                            <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="text-white"><FaFacebookF /></a>
                            <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="text-white"><FaInstagram /></a>
                            <a href="https://wa.me/543517723549" target="_blank" rel="noreferrer" className="text-white"><FaWhatsapp /></a>
                            </div>
                        </Col>
                        <Col className=" mb-3" md={4} >     
                            <h5 className="d-flex justify-content-center align-items-center" >Distribuidora y vinoteca</h5>   
                        </Col>
                    </Row>
                    <hr className="border-secondary" />
                    <p className="text-center mb-0 small">© {new Date().getFullYear()} Vinos Punilla . Derechos reservados | Diseñado por Marian Carballo</p>
                </Container>
            </footer>
        );
    }

export default Footer;
