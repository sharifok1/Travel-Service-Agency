import { useEffect, useState } from 'react';
import {getAuth, signInWithPopup, GoogleAuthProvider,signOut, onAuthStateChanged} from "firebase/auth";
import firebaseInitialization from '../Authenticatin/FireBase/FireBase.Init';

firebaseInitialization();

const UseFirebase = () => {

    const [user,setUser]=useState({});
    const [isLoading, setIsloading]=useState(true);

    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    // google signin function==============================//
   const withGoogleLogin=() => {
    setIsloading(true);
    return signInWithPopup(auth, googleProvider)

    
   }
    //signout handler=======================================//
    const logOut=()=>{ 
        setIsloading(true)     
        signOut(auth)
        .then(() => {
            setUser({})
        }).finally(()=>{
            setIsloading(false)
        })
    }
    // on Auth state change==================================//
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            if(user){
                setUser(user)
            }
            else{
                setUser()
            }
            setIsloading(false)
        });
    },[])
    return (
            {
                withGoogleLogin,
                user,
                isLoading,
                logOut,
                setUser,
                setIsloading,
                
            }
    );
    
};


export default UseFirebase;