import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div>
            <footer className="foter-style">
                <Row className="m-0">
                    <Col md={5}>
                        <h3>BDtravel Agency</h3>
                      <p> Road-9/B, Sector-5, Uttara, Dhaka</p> 
                      <p> Official: bdtravel.agency@gmail.com</p> 
                      <p> Help line: 01851515***</p> 
                        </Col>
                    <Col md={3}>
                        <h4>About Us</h4>
                        <p>Our Success</p>
                        <p>Terms & Conditions</p>
                        <p>Privacy Policy</p>
                    </Col>
                    <Col md={4}><h4>Pay With</h4>
                        <img className="img-fluid payment-card" src="https://utshobbd.com/wp-content/uploads/2019/12/payment.jpg" alt="" />
                    </Col>
                    
                </Row>
                <p className="foter-txt">Copyright © 2021 BDtravel Agency Service</p>
            </footer>
        </div>
    );
};

export default Footer;