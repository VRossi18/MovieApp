import React from 'react';
import logo from '../images/popcorn.png';
import './styles.css';

function Header() {
    return (
        <header id="main-header">
            <img id="main-icon" src={logo}/>
            <label id="main-title">Movie App</label>
        </header>
    )
}

export default Header;