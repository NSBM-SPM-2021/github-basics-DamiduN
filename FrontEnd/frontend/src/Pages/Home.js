import React from 'react';
import {Link} from 'react-router-dom';
import BannerImage from '../Assets/Cafe.jpg';
 import '../styles/Home.css'; 

function Home() {
    return (
        <div className="home" style={{backgroundImage: `url(${BannerImage})`}}>
            <div className="headercontainer" >
                <h1>Savory Cafe </h1>
                <p>It's Our Pleasure to Serve!</p>
                <Link to="/menu">
                <button>ORDER NOW</button>
                </Link>
                </div>
                
        </div>
    )
}

export default Home
