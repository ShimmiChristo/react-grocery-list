import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header style={headerStyle}>
            <h1> Grocery List </h1>
            <Link style={navLinks} to="/">Home</Link>
            <Link style={navLinks} to="/about">About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333', 
    color: '#fff',
    width: 'auto'
}
const navLinks = {
    color: '#fff',
    padding: '5px'
    
}

export default Header;
