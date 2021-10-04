import React from 'react';

import {Link} from 'react-router-dom';
import "../styles/Navbar.css"; 
export default function navbar() {
    return (
        <div  style={{backgroundColor:"black"}}>
        <nav className="navbar">
            <h1>Savory Cafe</h1>
            <div className="links">
                <Link to ='/'>Home</Link>
                <Link to ='/menu'>Menu</Link>
                <Link to ='/about'>About</Link>
                <Link to ='/contact'>Contact Us</Link>    
            </div>
            
        </nav>
        </div>

    )
}