import React from 'react';
import Logo_3 from '../Assests/Logo_3.png'
import { useState } from 'react'
import LoginSignup from '../my-components/LoginSignup'

function Contact() {
    const [showLoginSignup, setshowLoginSignup] = useState(false);

    const handleRegister = () => {
        setshowLoginSignup(true);
    };

    const handleClose = () => {
        setshowLoginSignup(false);
    };

    const handleSuccess = () => {
        setshowLoginSignup(false);
    };

    return (

        <div>

            <div className="contactspace1"></div>

            <div className="contactspace2"></div>

            <p className="contacthead" >Contact Us at  <span>The Look</span> </p>
            <p className="contactp1" >We’d love to hear from you!</p>
            <p className="contactp2" >Whether you have questions about our current exhibitions, want to learn more about a specific artwork, <br />
                or are interested in collaborating with us, we’re here to help. At <span> "The Look" </span>, we believe that art is an experience meant to be shared. <br />
                Reach out to us and become part of our creative community.</p>

            <div className="contactspace3"></div>

            <div className="regContainer">
                <button className="register-btn" onClick={handleRegister} >Register Now</button>

                {showLoginSignup && (
                    <div className="login-signup-modal">
                        <button className="close-btn" onClick={handleClose} >Close</button>
                        <LoginSignup onSuccess={handleSuccess} />
                    </div>
                )}

                <p>Feel free to register with us to receive exclusive updates about upcoming events, artist features, and more.</p>

            </div>

            <div className="contactPage-Logo">
                <img src={Logo_3} alt="" />
                <p>We are always looking for new and exciting pieces to display at "The Look".</p>
            </div>

        </div>

    );
}
export default Contact;