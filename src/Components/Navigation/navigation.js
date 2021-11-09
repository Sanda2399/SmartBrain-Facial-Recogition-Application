import React from 'react';
import Logo from '../Logo/logo';
import './navigation.css'

const Navigation = (props) => {
    if (props.isSignedIn) 
    {
        return (
            <nav className="nav_bar">
                <Logo/>
                <div className="nav_button-area">
                    <span className="nav_button" onClick={() => props.routeChangeAndFalse('signin')}></span>
                    <div className="nav_signout">Sign Out</div>
                </div>
            </nav>
        );
    } 
    else 
    {
        return (
            <nav className="nav_bar">
                <Logo/>
                <div className="nav_container">
                    <div className="nav_button-area">
                        <span className="nav_button" onClick={() => {props.routeChangeAndFalse('signin')}}></span>
                        <div className="nav_signout">Sign In</div>
                    </div>
                    <div className="nav_button-area">
                        <span className="nav_button" onClick={() => {props.routeChangeAndFalse('register')}}></span>
                        <div className="nav_signout">Register</div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navigation;