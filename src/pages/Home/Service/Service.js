import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { _id, img, name, description } = service;
    return (
        <div className='container-service'>
            <img style={{ width: "75%" }} src={img} alt="" />
            <h3 className='name'>{name}</h3>
            <p>{description}</p>
            <Link to={`/booking/${_id}`}>
                <button>Book Now</button>
            </Link>
        </div>
    );
};

export default Service;