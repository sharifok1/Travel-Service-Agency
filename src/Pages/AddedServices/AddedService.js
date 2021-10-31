import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddedService.css'
const AddedService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data =>{
         console.log(data);
        axios.post('https://sheltered-brook-76954.herokuapp.com/services',data)
        .then(res=>{
           console.log(res) 
        })
        }
    return (
        <div className="added-form">
            <h2>This is added order</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name")} placeholder="enter service name"/> <br />
                <input {...register("price")}placeholder="enter trip cost" /> <br />
                <input {...register("img")} placeholder="destination img"/> <br />
                <input {...register("time")} placeholder="travel days"/> <br />
                <textarea className="des-field" {...register("des")} placeholder="write description"/> <br />
                
                <input type="submit" />
                </form>
        </div>
    );
};

export default AddedService;