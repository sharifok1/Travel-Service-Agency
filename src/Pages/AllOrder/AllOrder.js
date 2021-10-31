import React from 'react';

import { Card, Col } from 'react-bootstrap';


const AllOrder = ({allData}) => {
    const {firstName,_id, placeName }=allData;
    return (
        <div className="mb-3">
            <Col>
                <Card className="bg-warning p-2"> 
                   <div className="row">
                       <div className="col-md-6">
                        <div className="m-2">
                        <Card.Title>Customer:{firstName}</Card.Title>
                     <h4>Destination:{placeName}</h4>
                     <h5>Booking Id:{_id}</h5>
                        </div>
                       </div>
                       <div className="col-md-6">
                           <button className="w-50 m-2 btn bg-success text-white">Approve Order</button> <br />
                           <button className="w-50 m-2 btn bg-danger text-white">Cancel Order</button>
                       </div>
                    
                   </div>
                </Card>
                </Col>
        </div>
    );
};

export default AllOrder;