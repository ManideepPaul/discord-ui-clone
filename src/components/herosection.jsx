import React from 'react';
import './herosection.css';

const HeroSection = (props) => {
    return (
        <div className="heroContainer">
            {/* <img className='center' src={props.imgCenter} alt="" /> */}
            <img className='left' src={props.imgLeft} alt="" />
            <img className='right' src={props.imgRight} alt="" />
            <span className=" heroHeading">IMAGINE A PLACE...</span>
            <p className="header2 heroDesc">...where you can belong to a school club, a gaming group, or a worldwide art community.</p>
            <p className="header2 heroDesc">Where just you and a handful of friends can spend time together. A place that makes it easy</p>
            <p className="header2 heroDesc">to talk every day and hang out more often.</p>
            <div className="divButton">
                <button className='white btnHoverWhite'>
                    <img src={props.download} alt="" className="heroDownload" />
                    Download for Mac</button>
                <button className='black'>Open Discord in your browser</button>
            </div>
        </div>

    )
}

export default HeroSection;