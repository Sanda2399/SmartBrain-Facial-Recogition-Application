import React from 'react';
import Tilt from 'react-parallax-tilt';
import './logo.css';
import brain from './brain.png';

const Logo = () => {
    return (
        <Tilt>
            <div className="logo-container">
                <img src={brain} alt="SmartBrain Logo" className="logo"></img>
            </div>
        </Tilt>
    )
}
export default Logo;