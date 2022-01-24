import React from 'react';
import { Button, Container } from 'react-bootstrap';
import './About.css'

const About = () => {
    return (
        <div>
            <Container className="mt-5 mb-5">
                <div className=" row">
                    <div className=" col-md-7 ">
                        <h3 style={{ paddingRight: '300px' }} className="text-primary">Our Story</h3>
                        <p style={{ paddingRight: '300px' }}>This adventure isn’t about change but it seems to be an inevitability.</p>
                        <br />
                        <h3 style={{ paddingRight: '300px' }} className="text-primary">Why Choose Us</h3>
                        <p> <ul className="text-danger">
                            <li style={{ paddingRight: '300px' }}>BOOKING WITH SPREAD PAYMENTS</li>
                            <li style={{ paddingRight: '300px' }}>SLEEP & TRAVEL IN COMFORT</li>
                            <li style={{ paddingRight: '300px' }}>FULLY LICENSED TOUR OPERATOR</li>
                            <li style={{ paddingRight: '300px' }}>Always more discoutn and Offer</li>
                        </ul> </p>
                        <br />
                        <h3 style={{ paddingRight: '300px' }} className="text-primary">What Our Commitment </h3>
                        <p style={{ paddingRight: '300px' }}>Since 2020, we’ve helped more than 1500,000 people of all ages enjoy the best outdoor experience of their lives. Whether it’s for one day or a two-week vacation, close to home or a foreign land and something like that.
                        </p>
                        <Button style={{ marginRight: '300px' }} variant="outline-success">See More About</Button>

                    </div>
                    <div className="col-md-5 ">

                        <img style={{ width: "550px", height: "450px", paddingRight: '50px' }} src="https://image.freepik.com/free-photo/portrait-beautiful-young-asian-woman-relax-leisure-enjoy-around-outdoor-swimming-pool_74190-11659.jpg" alt="" />

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default About;