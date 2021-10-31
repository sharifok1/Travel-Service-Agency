import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import UseAuth from '../../Hooks/UseAuth';
import UiOrder from './UiOrder/UiOrder';

const MyOrders = () => {
    const{user}=UseAuth();
    const [order,setOrder]=useState([]);
    useEffect(()=>{
        const url = 'https://sheltered-brook-76954.herokuapp.com/orders';
        fetch(url)
        .then(res=>res.json())
        .then(data=>setOrder(data));
    },[])
    // console.log(order)
    const userOrder = order.filter(myOrder => myOrder.firstName === user.displayName );
   
    
    return (
        <div className="container mb-5">
            <h2>Cheackout your order</h2>
           
            <Row xs={1} md={1} className="g-4">
            {
            userOrder.map(uniqOrder => <UiOrder
                key={uniqOrder._id}
                myOrder={uniqOrder}
                ></UiOrder> )
            }
            </Row>
            
        </div>
    );
};

export default MyOrders;