import React from 'react';
import { useHistory, useLocation } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';
import './GoogleLogin.css'

const GoogleLogin = () => {
    const {withGoogleLogin, setIsloading,}=UseAuth();
     //---------redirect route google sign in----------------------------
     const location = useLocation();
     const history = useHistory();
     const Redirect_uri= location.state?.from || '/Home'
     const googleRedirectLogin=()=>{
        withGoogleLogin()
         .then((result) => {
             history.push(Redirect_uri)
           }).finally(()=>{
             setIsloading(false);
           })
           
     }
    return (
        <div>
            <div className="login-background">
                <div className="loginPage">
                    <div>
                    <h2>Welcome to our agency</h2>
                         <button className="login-btn" onClick={googleRedirectLogin}><img className="img-fluid google-img" src="https://i.ibb.co/801bqLM/google.png" alt="" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GoogleLogin;