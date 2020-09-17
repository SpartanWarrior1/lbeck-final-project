import React from 'react';
import profilePicture from "../../../static/assets/images/bio/fake-bio.jpg";

export default function() {
    return (
        <div className="about-wrapper">
                <div 
                    className="about-right-wrapper"
                    style={{
                        background: "url(" + profilePicture + ") no-repeat",
                        backgroundSize: "cover",
                        backgroundPosition: "center"
                    }}
                />

                <div className="about-left-wrapper">
                    <div className="about-title">
                        About Me
                    </div>
                    <div className="about-info">
                        This is where info about me goes. Here is some sample text. Lorem ipsum dolor sit amet, 
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </div>
                </div>
        </div>
    );
}