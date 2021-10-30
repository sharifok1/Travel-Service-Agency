import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.Config";

const firebaseInitialization =()=>{
    initializeApp(firebaseConfig);
}

export default firebaseInitialization;