import React from 'react'
import Cafe from '../Assets/Cafe.jpg';
import "../styles/Contact.css";
function Contact() {
    return (
        <div >
            {/* <div className="leftside"style={{backgroundImage: `url(${Logos})`}}></div> */}
            <div className="rightside" style={{backgroundImage: `url(${Cafe})`}}>
                <h1>Contact Us</h1>

                <form id="contact-form" method="POST">
                    <label htmlFor="name">Full Name</label>
                    <input name="name" placeholder="Enter the Full Name..." type="text"/>
                    <label htmlFor="email">Email</label>
                    <input name="email" placeholder="Enter the Email..." type="email"/>
                    <label htmlFor="message">Message</label>
                    <textarea rows="6" placeholder="Enter Message..." name="message" required> </textarea>
                    <button type="submit">Send Message</button>


                </form>
            </div>
            
        </div>
    )
}

export default Contact;
