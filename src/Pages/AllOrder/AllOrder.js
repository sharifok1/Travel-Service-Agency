
import axios from 'axios';

import { Card, Col } from 'react-bootstrap';


const AllOrder = ({allData}) => {
    const {firstName,_id, placeName }=allData;
    console.log(allData);

    //status function-------------------------------
    const handleStatus =(condition)=>{

        const url = "https://sheltered-brook-76954.herokuapp.com/order/status"
        axios.put(url,{id:_id,status:condition})
        .then(res=>{
            console.log(res);
            alert('Status successfully update')
        })
        
    }
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
                           <button onClick={()=>handleStatus('accepted')} className="w-50 m-2 btn bg-success text-white">Approve Order</button> <br />
                           <button onClick={()=>handleStatus('cancel')} className="w-50 m-2 btn bg-danger text-white">Cancel Order</button>
                       </div>
                    
                   </div>
                </Card>
                </Col>
        </div>
    );
};

export default AllOrder;