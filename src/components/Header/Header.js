import React from "react";
import logo from './run-vira.png';
import './Header.css'

const Header = () => {
    return (
        <header className="header">
            <img 
            src={logo} 
            alt='logo'
            />
        </header>
    )
}

export default Header;