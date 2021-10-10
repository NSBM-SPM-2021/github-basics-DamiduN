import React from "react";
import Order from "../Assets/Ordering.jpg";
import "../styles/Order.css";
import {Link} from 'react-router-dom';
import { useHistory, useParams } from "react-router-dom";
import {useEffect, useState} from "react";
import axios from "./axios";
import  {toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css"


function FoodOrder() {
  const { price } = useParams();
  const { name } = useParams();
  const [quantity, setQuantity] = useState('');
  const [fullname, setFullname] = useState('');
  const [mobileno, setMobileno] = useState('');
  const [address, setAddress] = useState('');
  const [payment, setPayment] = useState('');
  const [way, setDelivery] = useState('');
  const history = useHistory();

  function submit() {

    const Orders = { price,name,quantity,fullname,mobileno,payment,way};
    axios.post('https://backend-savory.herokuapp.com/orders', Orders)
        .then(response =>
                // console.log(response),
                success(),
            history.push('/')
        )
        .catch(error => {
            erroralert()
            history.push('/')
            // this.setState({ errorMessage: error.message });
            console.error('There was an error!', error);
        });
}

const success = () =>{
  toast.success('Your Appoinment booked!',{
      position:toast.POSITION.TOP_CENTER,
      autoClose:3000
  })
}
 const erroralert = () =>{
     toast.error('Date Already Booked!',{
         position:toast.POSITION.TOP_LEFT,
         autoClose:3000
     })
    }


  return (
      
    <div className="foodorder">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${Order})` }}
      ></div>
      <div className="rightSide">
        <h1>Order Your Favourite Food Choice!</h1>
        
        
            <div className="scroll-div">
                <div className="scroll-object">

                

            

        <form id="order form" method="POST" >
            
                <label htmlFor="name">Full Name</label> <br/>
                <input name="name" placeholder="Enter the Full Name..." type="text"  value={fullname}
                      onChange={(e) => setFullname(e.target.value)}/> 

                <label htmlFor="address">Address</label> <br/>
                <input name="address" placeholder="Enter the Address..." type="text"  value={address}
                      onChange={(e) => setAddress(e.target.value)}/> 

                <label htmlFor="mobileno">Mobile No</label><br/>
                <input name="mobileno" placeholder="Enter the Mobile No..." type="text"value={mobileno}
                      onChange={(e) => setMobileno(e.target.value)}/>

                <label htmlFor="quantity">Quantity</label><br/>
                <input name="quantity" placeholder="Enter the Quantity..." type="number" value={quantity}
                      onChange={(e) => setQuantity(e.target.value)}/>  

                <label htmlFor="payment">Payment Method</label>
                <label htmlFor="Food Category">Ordered Food Items</label>
                {name}<br></br>
                Rs.{price}
                <label htmlFor="price">Total Amount</label>
                  {price*quantity}

                  

                <div >
                    <table>
                        <tr  onChange={(e) => setPayment(e.target.value)}>
                            <td>Cash</td>
                            <td style={{"height" : "25%", "width" : "20%"}}><input type="radio" value="Cash" name="payment" /> </td>
                            <td>Card</td>
                            <td style={{"height" : "25%", "width" : "20%"}}><input type="radio" value="Card" name="payment" /> </td>
                        </tr>
                    </table>
              
   </div>
  
                <div >
                <label htmlFor="TorD">Select your Choice</label>
                    <table>
                        <tr onChange={(e) => setDelivery(e.target.value)}>
                            <td>Take Away</td>
                            <td style={{"height" : "20%", "width" : "15%"}}><input type="radio" value="takeaway" name="type" /> </td>
                            <td>Delivery</td>
                            <td style={{"height" : "20%", "width" : "15%"}}><input type="radio" value="delivery" name="type" /> </td>
                        </tr>
                    </table>
    
                    <Link to="/menu">
              
                <button onClick={submit}>Order</button>
                </Link>
   
                
   </div>
            </form>
            </div>
            </div>
            </div>
      </div>
    
  );
}

export default FoodOrder;