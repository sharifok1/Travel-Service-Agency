import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Services from '../Services/Services';
import "./Home.css";

const Home = () => {
    const [places, setPlace]=useState([]);
    useEffect(()=>{
        const url = 'https://sheltered-brook-76954.herokuapp.com/services'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setPlace(data))
    },[])
    return (
        <div>
            <div id="#services">
            <h1>
                Our Winter Best Offer
            </h1>
            <h4>Cheack out our top-rated tours</h4>
             </div>
               <div className="container">
                 <Row xs={1} md={2} lg={3} className="g-4">
                    {
                        places.map(place=><Services
                        key={place.name}
                        data={place}
                        ></Services>)
                    }
               </Row>
            </div>
            <div>
                <div className="home-background">
                <h3>Why we are the best?</h3>
                    <div className="row ">
                        <div className="col-md-4">
                           <div className="row home-quality">
                            <h5>HIGHLY QUALIFIED SERVICE</h5>
                                <p>Our high level of service is officially recognized by thousands of clients.</p>
                           </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row home-quality">
                            <h5>WIDE VARIETY OF DESTINATIONS</h5>
                            <p>With Travellino, you’ll find a perfect destination among hundreds available.</p>
                            </div>
                            </div>
                        <div className="col-md-4">
                           <div className="row home-quality">
                           <h5>PERSONALIZED MATCHING</h5>
                            <p>We can provide up to 3 experienced travel specialists who fit best.</p>
                           </div>
                            </div>
                        <div className="col-md-4">
                           <div className="row home-quality">
                           <h5>24/7 SUPPORT</h5>
                            <p>Our travel agents are always there to support you during your trip.</p>
                           </div>
                        </div>
                        <div className="col-md-4">
                            <div className="row home-quality">
                            <h5>HANDPICKED HOTELS</h5>
                            <p>We pick the hotels with the utmost reputation and positive reviews.</p>
                            </div>
                            </div>
                        <div className="col-md-4">
                           <div className="row home-quality">
                           <h5>BEST PRICE GUARANTEE</h5>
                            <p>We guarantee you’ll get top-notch comfort at an affordable price.</p>
                           </div>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;