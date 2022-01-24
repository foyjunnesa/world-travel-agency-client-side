import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <img
                        className=" carousel d-block w-100"
                        src="https://image.freepik.com/free-photo/beautiful-girl-standing-viewpoint-koh-nangyuan-island-near-koh-tao-island-surat-thani-thailand_335224-1094.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className='caption-one'>A journey of a thousand miles begins with a single step..</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel d-block w-100"
                        src="https://image.freepik.com/free-photo/palm-luxury-sky-bora-caribbean_1203-5350.jpg"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3 className='caption-two text-primary'>Do not follow where the path may lead. Go instead where there is no path and leave a trail</h3>
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
                    <img
                        className="carousel d-block w-100"
                        src="https://image.freepik.com/free-photo/aerial-view-chicago-by-night-usa_268835-3571.jpg"
                    />

                    <Carousel.Caption>
                        <h3 className='caption-four bg-danger'>Oh the places you’ll go..</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;