import React from 'react';

import {Link} from 'react-router-dom';
import "../styles/Navbar.css"; 
export default function navbar() {
    return (
        <div className="Navbar">
        
           
            <div className="rightside">
                <Link to ='/'>Home</Link>
                <Link to ='/menu'>Menu</Link>
                <Link to ='/about'>About</Link>
                <Link to ='/contact'>Contact Us</Link>
               
            </div>
            
        </div>
    )
}