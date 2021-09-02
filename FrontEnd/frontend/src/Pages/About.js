import React from 'react'
import Abouttop from '../Assets/Abouttop.jpg';
import bottom from '../Assets/bottom.jpg';
import '../styles/About.css'; 

function About() {
    return (
        <div className="about">
            <div className="aboutTop" style={{backgroundImage: `url(${Abouttop})`}} >
           </div>
            <div className="aboutBottom" style={{backgroundImage: `url(${bottom})`}}>
                <h1>ABOUT US</h1>
                <p>We are committed to using local, seasonal and natural ingredients. We adapt our food menu from time to time to suit what produce is in season. We have carefully curated our suppliers, all of which have a common goal to provide quality products to Sri Lankan consumers. Our coffee is grown and roasted in Sri Lanka by Soul Coffee. Our tea is provided by Peekoh Tea.

Our salad leaves are sourced from Honest Greens, fresh produce from local markets. Our breads are delivered daily from The Baker’s Choice and Bread.lk. We try where possible to meet the needs of our dairy free, vegan and vegetarian friends. Our sandwiches, salads, brunch and lunch are freshly prepared to order!</p>
            </div>
            
            
        </div>
    )

    }
export default About;