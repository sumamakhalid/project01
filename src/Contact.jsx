import React from "react";
import ReactDom from "react-dom"
import './css/contact.css'

function Contact(){
    return(
         <>
         <div className="contactcontent">
            <div className="call">
                <h3>Call : </h3>
                <p>+92 3098016161</p>
            </div>
            <div className="email">
                <h3>Email : </h3>
                <p>sumamakhalid67@gmail.com</p>
            </div>
    </div>
    </>
         );
}
export default Contact;