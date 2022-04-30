import React from 'react';
import './herosection.css';

const HeroSection = (props) => {
    return (
        <div className="heroContainer">
            <img className='center' src={props.imgCenter} alt="" />
            <img className='left' src={props.imgLeft} alt="" />
            <img className='right' src={props.imgRight} alt="" />
        </div>
    )
}

export default HeroSection;