import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = ({data}) => {
    const {img, name, des,price, time,_id}=data;
    return (
        <div >
             <Col>
                <Card className="home-service-card">
                    <Card.Img variant="top" src={img} />
                    <Card.Body >
                    <Card.Title>{name} <small className="text-danger">{time}</small></Card.Title>
                    <Card.Text>
                        {des.slice(0,150)}...
                    </Card.Text>
                    <h4>Cost:{price}</h4>
                    <Link to={`/BookingFrom/${_id}`}>
                    <button className="btn btn-danger booked-btn">Book this offer</button>
                    </Link>
                    </Card.Body>
                </Card>
                </Col>
        </div>
    );
};

export default Services;