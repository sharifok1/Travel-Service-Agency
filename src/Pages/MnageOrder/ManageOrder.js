import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import AllOrder from '../AllOrder/AllOrder';

const ManageOrder = () => {
    const [allOrder, setAllOrder] = useState([]);
    useEffect(()=>{
        const url = 'https://sheltered-brook-76954.herokuapp.com/orders';
        fetch(url)
        .then(res =>res.json())
        .then(data =>setAllOrder(data))
    },[])

    return (
        <div className="container">
            <h2 className="mt-5 text-start mb-4 bg-secondary text-white p-4">All order panel</h2>
            <Row xs={1} md={1} className="g-4">
                {
                    allOrder.map(allData =><AllOrder
                    key={allData._id}
                    allData={allData}
                    ></AllOrder>)
                }
            </Row>
            
        </div>
    );
};

export default ManageOrder;