import { useContext } from "react";
import  { AuthContext } from '../ContextAPI/AuthProvider';


const UseAuth = () => {
    return useContext(AuthContext)
};

export default UseAuth;
