import React from 'react';
import './Famous.css'

const Famous = () => {
    return (
        <div>
            <div className='famous-part'>

                <h2 className="famous-destinations"> <span style={{ color: 'red' }}>Famous</span> Destinations</h2>
                <p>World's best tourist destinations <hr /> </p>
            </div>

            <div className="famous-img d-flex col-lg-4 col-sm-6 col-12">
                <h3 className='tokyo'>Tokyo</h3>
                <img className='single-img' src="https://image.freepik.com/free-photo/beautiful-landmark-fuji-mountain-chureito-pagoda-sunset-japan_335224-13.jpg" alt="Tokyo" />

                <h3 className='seoul'>Seoul</h3>
                <img className='single-img' src="https://image.freepik.com/free-photo/road-no-3-top-mountains-with-green-jungle-nan-province-thailand_335224-1081.jpg" alt="" />

                <h3 className='london'>London</h3>
                <img className='single-img' src="https://image.freepik.com/free-photo/big-ben-clock-tower-london-sunset-special-photographic-processing_268835-1109.jpg" alt="" />

                <h3 className='bali'>Bali</h3>
                <img className='single-img' src="https://image.freepik.com/free-photo/beautiful-diamond-beach-penida-island-bali-indonesia_181624-29626.jpg" alt="" />




            </div>

        </div>
    );
};

export default Famous;