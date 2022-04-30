import React from 'react';
import './navbar.css';

const NavBar = (props) => {
    return (
        <div className="navContainer">
            <img src={props.data} alt="" className="logo" />
            <div className="navLinks">
                <a href="#">Downloads</a>
                <a href="#">Nitro</a>
                <a href="#">Safety</a>
                <a href="#">Support</a>
                <a href="#">Blogs</a>
                <a href="#">Careers</a>
            </div>
            <button className="loginNav">Login</button>
        </div>
    )
}

export default NavBar;