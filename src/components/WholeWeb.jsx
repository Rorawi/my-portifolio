import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import MySkills from './MySkills';
import MyProjects from './MyProjects';
import { AwardSwiperComp } from './Swiper';
import Footer from './Footer';
import PortfolioCarousel from './PortfolioCarousel';
import Contact from './Contact';

const WholeWeb = () => {
    return (
        <div>
            {/* <Navbar/> */}
            <Hero/>
            <MySkills/>
            <MyProjects/>
            {/* <PortfolioCarousel /> */}
            {/* <AwardSwiperComp/> */}
            <Contact />
            <Footer/>
        </div>
    );
}

export default WholeWeb;
