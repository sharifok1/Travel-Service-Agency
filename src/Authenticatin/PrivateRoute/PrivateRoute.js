import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';

const PrivateRoute = ({children, ...rest}) => {
    const {user , isLoading}= UseAuth();
    if(isLoading){
        return <Spinner animation="border" variant="success" />
    }
    return (
        <Route
            {...rest}
            render = {({ location }) =>
        user?.email?  ( children):
        (
            <Redirect
            to={{
                pathname: '/googleLogin',
                state:{ from: location}
            }}
            />
        )
        }
        />
    );
};

export default PrivateRoute;