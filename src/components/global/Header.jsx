import React from "react";

const Header =()=>{
    return(
        // <div className="header">
        <div className="navbar">
        <div className="navbar-header">
            <div className="welcome-title">
             <span className="welcome">Welcome!</span>
            </div>
        </div>
            <div className="navbar-collapse">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills-section">Skills</a></li>
                    <li><a href="#sayhi">Say Hi!</a></li>
                </ul>
            </div>
        </div>
    // </div>
    )
}
export default Header;