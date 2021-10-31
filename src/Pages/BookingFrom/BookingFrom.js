import React, { useEffect, useState }  from 'react';
import { useForm } from 'react-hook-form';
import './BookingFrom.css'
import { useParams } from 'react-router';
import UseAuth from '../../Hooks/UseAuth';
import axios from 'axios';


const BookingFrom = () => {
    const{user}=UseAuth();
    const{_id}= useParams();
   const [detailsData,setDetailsData]=useState([]);
   useEffect(()=>{
       const url ='https://sheltered-brook-76954.herokuapp.com/services'
       fetch(url)
       .then(res=>res.json())
       .then(data=>setDetailsData(data))
   },[])
   
   const itemId = detailsData.find(items=>items._id === _id);

    //react-hook form
    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data =>{
        data.orderStatus='Pending';
        console.log(data);
        //post method----------------------------post
        axios.post('https://sheltered-brook-76954.herokuapp.com/orders', data)
        .then(res=>{
            if(res.data.insertedId){
                alert('order successfully confirmed')
                reset();
            }
        })
    } 
    
    return (
        <div className="mt-4 mb-4">
            <h1>Let's start your trip !!!Booking Now</h1>
            <h3>Welcome to {itemId?.name}s Journey</h3>
            
            <div className="row m-0 mt-5">
                 <div className="col-lg-6 mt-4">  {/*-------------------------------form*/}
                    <h3>Please provide your vaild information carefully</h3>
                      

                    <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="user-form">
                    <input {...register("firstName")} placeholder="Your full Name" defaultValue={user.displayName} /> <br />
                    <input {...register("Email")} placeholder="Enter your email" defaultValue={user.email}/> <br />
                    <input {...register("Passfort")} placeholder="Passport no" /> <br />
                    <input {...register("PhoneNumber")} placeholder="Phone Number" /> <br />
                    <input {...register("placeName")} placeholder='visit place' defaultValue={itemId?.name} /> <br />
                    <input {...register("placeImg")} placeholder='image-link' defaultValue={itemId?.img} /> <br />
                    <input {...register("cost")} placeholder='cost' defaultValue={itemId?.price} /> <br />
                    <select className="select" {...register("gender")}> 
                        <option value="female">female</option>
                        <option value="male">male</option>
                        <option value="other">other</option>
                    </select> <br />
                    <input className="confirmButton" type="submit" value="Make confirm your order" />
                    </div>
                    </form>

                    </div>
                    <div className="col-lg-6"> {/*---------------------------details */}
                       <div className="row m-4">
                       <img src={itemId?.img} alt="" />
                        <h1>{itemId?.name}</h1>
                        <p>{itemId?.des}</p>
                       </div>
                    </div>
            </div>
        </div>
    );
};

export default BookingFrom;