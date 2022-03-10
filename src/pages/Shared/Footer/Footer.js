import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <Container className=''>
                <div className="row">
                    <div className="col-md-4 text-white">
                        <h4>About Us</h4>
                        <h6 className="text-align-justify">Since 2020, we’ve helped more than 500,000 people of all ages enjoy the best outdoor experience of their lives. Whether it’s for one day or a two-week vacation, close to home or a foreign land and something like that.</h6>

                    </div>
                    <div className="col-md-2 text-white ms-5">
                        <h5>TOUR <i className="fas fa-car-side"></i></h5>

                        <p><i className="fas fa-fighter-jet"></i> Thailand</p>
                        <p><i className="fas fa-fighter-jet"></i> Japan</p>
                        <p><i className="fas fa-fighter-jet"></i> Singapore</p>
                        <p><i className="fas fa-fighter-jet"></i> India</p>
                        <p><i className="fas fa-fighter-jet"></i> Swizerland</p>

                    </div>
                    <div className="col-md-2 text-white ms-5">
                        <h5>SUPPORT <i className="fas fa-envelope"></i></h5>

                        <p><i className="fas fa-arrow-right"></i> Account</p>
                        <p><i className="fas fa-arrow-right"></i> Legal</p>
                        <p><i className="fas fa-arrow-right"></i> Contact</p>
                        <p><i className="fas fa-arrow-right"></i> Term & policy</p>


                    </div>
                    <div className="col-md-2 text-white ms-5">
                        <h5>USEFUL PAGES <i className="fas fa-mouse-pointer"></i></h5>

                        <p><i className="fas fa-street-view"></i> Contact No.+123 880 9480</p>
                        <p><i className="fas fa-street-view"></i> Our Best Service</p>
                        <p><i className="fas fa-street-view"></i> Email ID:info@travel.com</p>
                        <p><i className="fas fa-street-view"></i>Gulshan,Dhaka-1512</p>
                        Follow Us <i className="fab fa-twitter"></i> <i className="fab fa-google-plus-g"></i> <i className="fab fa-facebook-square"></i>
                    </div>
                </div>
            </Container>

            <div className="text-center text-white">

                <p>© Copyright 2022 | Designed By <span style={{ color: "orange" }}>Foyjunnesa Mayna</span> | All Rights Reserved</p>

            </div>
        </div>
    );
};

export default Footer;