import React from 'react';
import Logo from '../Logo/logo';
import './navigation.css'

const Navigation = () => {
    return (
        <nav className="navbar">
            <Logo/>
            <span>Sign Out</span>
        </nav>
    )
}

export default Navigation;