import React from 'react'
import {Link} from 'react-router-dom';

function MenuItem({image,name,price}) {
    return (
        <div  className="menuItem">
       <Link to ='/foodorder'>
 <div style={{backgroundImage: `url(${image})`}}>             
         </div>
        </Link>
                    <div>
                    
             <h1>{name}</h1>
             <p>Rs{price}</p>
                    </div>

        </div>
 
       
    )
}

export default MenuItem
