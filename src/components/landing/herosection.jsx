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
                <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><g><rect fill="none" height="24" width="24"/></g><g><path d="M18,15v3H6v-3H4v3c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2v-3H18z M17,11l-1.41-1.41L13,12.17V4h-2v8.17L8.41,9.59L7,11l5,5 L17,11z"/></g></svg>
                    Download for Mac</button>
                <button className='black'>Open Discord in your browser</button>
            </div>
        </div>

    )
}

export default HeroSection;