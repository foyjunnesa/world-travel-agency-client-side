import React from 'react';
import './AddService.css';
import { useForm } from "react-hook-form";
import axios from 'axios';
import Service from './../Home/Service/Service';

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('https://sheltered-thicket-57277.herokuapp.com/services', data)
            .then(res => {
                if (res.data.inserteId) {
                    alert('added successfully');
                    reset();
                }
            })
    }

    return (
        <div className='add-service'>
            <h2 style={{ marginTop: "30px" }} className="text-center text-muted mb-5">Please Add a <span className="fw-bold" style={{ fontSize: "30px", color: "tomato" }}>Service</span> </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })} placeholder='Name' />
                <input {...register("description")} placeholder='Description' />
                <input {...register("img")} placeholder='Img url' />
                <input className='submit' type="submit" />
            </form>
        </div>
    );
};

export default AddService;