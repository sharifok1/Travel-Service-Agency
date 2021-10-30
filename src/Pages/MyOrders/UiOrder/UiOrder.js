import React from 'react';
import { Card, Col } from 'react-bootstrap';

const UiOrder = ({myOrder}) => {
    const{firstName,placeImg,placeName,cost}=myOrder;
    // console.log(myOrder);
    return (
        <div>
            <Col>
            <Card >
                <div className="row">
                    <div className=" col-6 col-lg-4">
                    <Card.Img className="img-fluid " variant="top" src={placeImg} />
                    </div>
                    
                    <div className="col-6 col-lg-4 pt-3">
                    <Card.Body>
                    <Card.Title>Customer:{firstName}</Card.Title>
                    <h4>Locaton:{placeName}</h4>
                    <h3>Total Cost:{cost}</h3>
                    </Card.Body>
                    </div>
                
                    <div className="col-11 col-lg-3 pt-3">
                        <button className="btn btn-danger m-2 w-100"><small>status:Pending</small></button> <br />
                        <button className="btn btn-secondary m-2 w-100">Renove Order</button>
                    </div>
                </div>
            </Card>
        </Col>
        </div>
    );
};

export default UiOrder;