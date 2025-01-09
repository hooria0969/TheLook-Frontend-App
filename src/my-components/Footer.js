import React from 'react';
import location from '../Assests/location.png'
import phone from '../Assests/phone.png'
import email from '../Assests/email.png' 
function Footer(){
    return(

        <div className="contact-footer">
            
        <div className="right-foot">
        <h2>About Gallery</h2>
            <p> <span> <b>THE LOOK</b></span> is a heaven for artistic expression, showcasing stunning sculptures, captivating paintings,
                and intricate printmakings. Explore our curated collection and let art inspire, connect, and transform your world.
                Whether you're a seasoned art connoisseur or a curious explorer, our gallery offers something to ignite your passion for the arts.</p>
        </div>

        <div className="vertical-line"></div>

        <div className="left-foot">
                        <h2>Keep In Touch</h2>
                        <img src={location} alt="" />
                        <p>UET PESHAWAR , KPK , PAKISTAN </p>
            
                        <img src={phone} alt="" />
                        <p>+92-123-12-32</p>
            
                        <img className='emailpic' src={email} alt="" />
                        <p className='regno' > <a href=""> 23PWBCS1009 </a> </p>
                        <p><a href="">23PWBCS9389</a></p>
                        <p><a href="">23PWBCS4233</a></p>

        </div>

    </div>    

    );
}
export default Footer;