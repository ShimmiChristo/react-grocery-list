import React from 'react'

function Header() {
    return (
        <header style={headerStyle}>
            <h1> Grocery List </h1>
        </header>
    )
}

const headerStyle = {
    background: '#333', 
    color: '#fff',
    width: 'auto'
}

export default Header;
