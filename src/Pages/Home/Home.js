import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
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

            <div className="container mt-4 mb-4">
                <div className="row">
                    <div className="col-md-6 col-lg-3 p-2 ">
                        <div className=" bg-danger text-white m-2 p-2 support-card">
                        <img src="" alt="" />
                        <h3>Hotel Booking</h3>
                        <p>
                            We provided hotel for our clients. After booking any offer we confirmed a hotel for visitors.
                        </p>
                        <i class="fas fa-bed fontS"></i>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 p-2">
                        <div className=" bg-danger text-white m-2 p-2 support-card">
                        <img src="" alt="" />
                        <h3>Flight Booking</h3>
                        <p>
                            We try to serve best air lines for our travelers. So that you can feel nice in air ways.
                        </p>
                        <i class="fas fa-fighter-jet fontS"></i>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3 p-2">
                     <div className=" bg-danger text-white m-2 p-2  support-card">
                      <img src="" alt="" />
                        <h3>Ticket Booking</h3>
                        <p>
                            Ticketbookin is also another part of our processing system.We provided flight Ticket.
                        </p>
                        <i class="fas fa-ticket-alt fontS"></i>
                      </div>
                    </div>

                    <div className="col-md-6 col-lg-3 p-2">
                       <div className="  bg-danger text-white m-2 p-2 support-card">
                       <img src="" alt="" />
                        <h3>Amazing Tour</h3>
                        <p>
                            For made your joiurney enjoyble . We arrenged all kind of support that needs for our client. 
                        </p>
                        <i class="fas fa-suitcase-rolling fontS"></i>
                       </div>
                    </div>
                </div>
            </div>
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
               {/* add -------------------------------------offer btn// */}
               <Link to="/AddedService">
               <button className="btn btn-success w-25 mt-4" disabled>Add a offer</button>
               </Link>
            </div>

            {/* extra part-------------------------------------------- */}
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