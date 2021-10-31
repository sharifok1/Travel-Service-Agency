import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="mt-5 mb-4 p-5">
            <h4 >Page not available thats you are trying to access.
                please enter correct url . Or go to home page

            </h4>
            <br />
            <br />
            <Link to="/Home">
            <button className="btn btn-primary">Goto home</button> 
            </Link>
            
        </div>
    );
};

export default NotFound;