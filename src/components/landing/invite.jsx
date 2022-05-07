import React from 'react';
import "./invite.css"

const Invite = (props) => {
    return (
        <div className="inviteContainer threeSection">
            <img src={props.img} alt="" className="inviteImg threeImg" />
            <div className="inviteContent threeContent">
                <span className="inviteHeading threeHeading">Create an invite-only place where you belong</span>
                <p className="inviteDesc threeDesc">
                    Discord servers are organised into topic-based channels where you can collaboraate, share, and just talk about your day without clogging up a group chat.
                </p>
            </div>
        </div>
    )
}

export default Invite;