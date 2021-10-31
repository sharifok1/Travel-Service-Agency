import React from 'react';
import './Header.css';
import {  Nav, Navbar } from 'react-bootstrap';
import banner from './travel.jpg'
import { HashLink } from 'react-router-hash-link';
import UseAuth from '../../Hooks/UseAuth';

const Header = () => {
    // const {users}=props;
    const {user,logOut}=UseAuth();

    
    return (
        <div className="heading-page">
            {/* navbar///================ */}
            <Navbar collapseOnSelect expand="lg"  bg="dark" variant="dark" fixed="top">
              
                 <Navbar.Brand className="brandNav" href="#home"> <h1>Travel-Agency</h1></Navbar.Brand>
               
                    <Navbar.Toggle />
                        <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to ='/Home#services'>Home</Nav.Link>
                        <Nav.Link as={HashLink} to ='/MyOrders'>My Orders</Nav.Link>
                        <Nav.Link as={HashLink} to ='/ManageOrder'>Manage Order</Nav.Link>
                        <Nav.Link as={HashLink} to ='/Blog#Blog'>Blog</Nav.Link>
                        {
                            user?.email?
                            <p
                            
                                className="text-white m-2">{user.displayName}
                                <button onClick={logOut} className="ms-2 logout-btn">LogOut</button>
                                <img className="user-photo" src={user.photoURL} alt="" />
                            </p>:
                            <Nav.Link as={HashLink} to ='/googleLogin'>Signin</Nav.Link>
                        }
                        
                        </Navbar.Collapse>
                
                
            </Navbar>

            {/* baner======================= */}
            < div className="mt-5">
              <img className='img-fluid pt-3' src={banner} alt="" />
            </div>
        </div>
    );
};

export default Header;