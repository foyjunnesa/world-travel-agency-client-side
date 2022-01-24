import React from 'react';
import Banner from './Banner/Banner';
import Famous from './Famous/Famous';
import LearnMore from './LearnMore/LearnMore';
import Promotion from './Promotion/Promotion';
import Services from './Services/Services';

const Home = () => {
    return (
        <div id="home">
            <Banner></Banner>
            <Famous></Famous>
            <Services></Services>
            <Promotion></Promotion>
            <LearnMore></LearnMore>

        </div>
    );
};

export default Home;