import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <Carousel className='baner' fade>

                <Carousel.Item>
                    <img
                        className="carousel d-block w-100"
                        src="https://image.freepik.com/free-photo/aerial-view-chicago-by-night-usa_268835-3571.jpg"
                    />

                    <Carousel.Caption>
                        <h3 className='caption-four bg-danger'>Oh the places you’ll go..</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img style={{ backgroundColor: "black", opacity: "3.7" }}
                        className="carousel d-block w-100"
                        src="https://travel-time.cmsmasters.net/wp-content/uploads/2016/07/ruykl.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className='caption-two text-light'>Do not follow where the path may lead. Go instead where there is no path and leave a trail</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="carousel d-block w-100"
                        src="https://image.freepik.com/free-photo/tall-city-building-distance-shot-from-millennium-bridge-nighttime_181624-2345.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3 className='caption-three'>Traveling – it leaves you speechless, then turns you into a storyteller.</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img style={{ backgroundColor: "black", opacity: "1" }}
                        className=" carousel d-block w-100"
                        src="https://t3.ftcdn.net/jpg/02/73/07/16/240_F_273071638_xkzJzkwchYdqFeFdjuwLuVlU6bPONrqA.jpg"
                        alt="First slide"
                    />

                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;