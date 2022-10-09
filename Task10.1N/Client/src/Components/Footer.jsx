import React from "react";
import './Footer.css'
import {FaFacebook, FaInstagram, FaTwitter} from 'react-icons/fa'
function Footer(){
    return (
        <div className='footer-container'>
          <div class='footer-links'>
          <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
               <h1>Explore</h1>
               <p>Home</p>
               <p>Questions</p>
               <p>Articles</p>
               <p>Tutorials</p>
            </div>
            <div className="footer-link-items">
            <h1>Support</h1>
               <p>FAQs</p>
               <p>Help</p>
               <p>Contact Us</p>
            </div>
            </div>
            <div class='footer-link-items'>
            
            <h1>Stay Connected</h1>
            <div class='footer-link-itemss'>
               <a href="https://www.facebook.com/DeakinUniversity">
                <FaFacebook className="icon"/>
               </a>
               <a href="https://www.instagram.com/deakinuniversity/">
                <FaInstagram className="icon"/>
               </a>
               <a href="https://twitter.com/deakin">
                <FaTwitter className="icon"/>
               </a>
               </div>
            </div>
            
        </div>
        <div className="footer-link-items">
            <h1>DEV@Deakin 2022</h1>
            </div>
            <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            Privacy Policy
            </div>
            <large class='website-rights'>Terms</large>
            <p>Code Of Conduct</p>
        </div>
        </section>
        </div>
    )
}
export default Footer