import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';
import MySkills from './MySkills';
import MyProjects from './MyProjects';
import { AwardSwiperComp } from './Swiper';
import InSight from './InSight';

const WholeWeb = () => {
    return (
        <div>
            {/* <Navbar/> */}
            <Hero/>
            <AwardSwiperComp/>
            <MySkills/>
            <MyProjects/>
            <InSight/>
        </div>
    );
}

export default WholeWeb;
