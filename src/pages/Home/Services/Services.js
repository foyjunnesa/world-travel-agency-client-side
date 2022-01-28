import React, { useEffect, useState } from 'react';
import './Services.css'
import Service from '../Service/Service';


const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://sheltered-thicket-57277.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data));
    }, [])
    return (
        <div className='service-container'>
            {
                services.map(service => <Service
                    key={service._id}
                    service={service}></Service>)
            }
        </div>
    );
};

export default Services;