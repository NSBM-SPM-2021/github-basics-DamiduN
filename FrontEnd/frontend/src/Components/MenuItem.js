import React from 'react'
import {Link} from 'react-router-dom';

function MenuItem({image,name,price}) {
    return (
        <div  className="menuItem">
       <Link to ={`/foodorder/${price}/${name}`}>
 <div style={{backgroundImage: `url(${image})`}}>             
         </div>
        </Link>
                    
             <h1>{name}</h1>
             <p>Rs{price}</p>
                    

        </div>
 
       
    )
}

export default MenuItem;
