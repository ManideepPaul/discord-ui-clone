import React from 'react'

const Fandom = (props) => {
    return (
        <div className="fandomContainer threeSection">
            <img src={props.img} alt="" className="fandomImg threeImg" />
            <div className="fandomContent threeContent">
                <span className="fandomHeading threeHeading">From few to a fandom</span>
                <p className="fandomDesc threeDesc">
                    Get any community running with moderation tools and custom member access. Give members special power, set up private channels, and more.
                </p>
            </div>
        </div>
    )
}

export default Fandom