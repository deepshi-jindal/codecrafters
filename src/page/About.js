import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import "./About.css";
import { CSSTransition } from 'react-transition-group';
import { Link } from 'react-router-dom';
import { FaCcPaypal } from 'react-icons/fa';
import { SiPaytm } from 'react-icons/si';
import { FaApple } from 'react-icons/fa';
import { FaGooglePay } from 'react-icons/fa';
import { FaAmazonPay } from 'react-icons/fa';
import Moto from "../component/Moto";

const About = () => {
  return (
    
    <div>
    <section className="hero">
        <h1>ABOUT US</h1>
        {/* <p>Where a world of freshness and flavor awaits you! Immerse yourself in a virtual journey that brings to life
            the essence of our exceptional online marketplace. As you step into Veggie Village, prepare to be captivated
            by the vibrant tapestry of colors, textures, and tastes that define our diverse range of products.</p> */}
    </section>

    <section className="section animate">
        <h2>The Vision</h2>
        <p>Our vision is simple yet powerful to create a digital haven where food enthusiasts and health-conscious
            individuals can access an array of options to nourish their bodies and delight their taste buds. With a
            user-centric approach, we've decided to strip away the distractions of a traditional navigation bar,
            allowing you to focus solely on the immersive experience of discovering our offerings. <br/>Our main goal is to provide you with 100% Original 
            and Safe fruits & vegetables and try to provide you a better experience on the world wide web. We mainly focus on our service to keep 
            improving it regularly to provide a better user experience to all users. So go and buy seasonal organic and 10% natural fruits & 
            vegetables from our website</p>
    </section>

    <section className="section animate">
        <h2>Our Promise</h2>
        <p>As you journey begin with us, know that every product you encounter has met stringent quality
            standards. From the moment a farmer tends to the crops to the instant you place an item in your cart, we're
            committed to maintaining the integrity of the food chain. We believe that everyone deserves access to
            nourishing and delightful foods, and we're excited to share that passion with you.</p>
    </section>

    <section className="section animate">
        <h2>Embark on the Experience</h2>
        <p>Our website isn't just a marketplace; it's an expedition into a world of flavors, textures, and stories.
            Join us as we celebrate the wonders of nature, the dedication of our suppliers, and the joy of culinary
            exploration. Whether you're a seasoned chef or a budding home cook, our animated 'About Us' page invites you
            to join our community and discover a symphony of tastes that resonate with your heart and palate.</p>
    </section>

    <section className="section ready animate">
        <h2>Ready to Start Exploring?</h2>
        <p>Visit our website today and embark on an interactive adventure like no other. Let the absence of a menu
            bar be your invitation to explore, engage, and experience the essence of our marketplace. We're not just
            providing groceries; we're creating memories and celebrating the beauty of food in all its forms.</p>
    
    </section>

    <div className="moto-container">
        
        <Moto />
        </div>

    <div id="footer">
        <div class="section-footer">
            <div class="section-wrap">
                <div class="footer-wrap">
                    <div class="company-details">
                        <h2>Code Crafters</h2>

                        <div class="fdetails">
                            <p>A Pearl of health hidden in Freshness!!!</p>
                        </div>
                    </div>

                    <div class="footer-menu">
                        <h2>Menu</h2>
                        <div class="fmenu">
                        <p><Link to="/">Home</Link></p>
          <p><Link to="/about">About Us</Link></p>
          <p><Link to="/prediction">Prediction</Link></p>
          {/* <p><Link to="/services">Menu</Link></p> */}
          <p><Link to="/fruits">Products</Link></p>
          <p><Link to="/contact">Contact</Link></p>
                        </div>
                    </div>

                    {/* <div class="top-products-links">
                        <h2>Top Products</h2>
                        <div class="flinks">
                            <p><a href="#products">Apple</a></p>
                            <p><a href="#products">Grapes</a></p>
                            <p><a href="#products">Mangos</a></p>
                            <p><a href="#products">Oranges</a></p>
                            <p><a href="#products">Pinapple</a></p>
                        </div>
                    </div> */}

                    <div class="useful-links">
                        <h2>Find Us At</h2>
                        <div class="Qlinks">
                        {/* <FontAwesomeIcon icon="fa-brands fa-google-pay" size="xl" style={{color: "#ffffff",}} /> */}
                            <p><a href=" ">Facebook</a></p>
                            <p><a href=" ">Instagram</a></p>
                            <p><a href=" ">Twitter</a></p>
                             <p><a href=" ">Pinterest</a></p>
                            {/*<p><a href=" ">Help</a></p> */}
                        </div>
                    </div>
                    <div className="master-cards">
      <h2>Easy Payment</h2>
      <div className="payment-cards">
        <div className="payment-link"> 
        <a href="">
        <FaGooglePay size={35} color="white"/>
        </a>
        </div>
        <div className="payment-link">
        <a href="">
        <FaCcPaypal size={25} color="white"/>
        </a>
        </div>

        <div className="payment-link">
        <a href="">
          <SiPaytm size={25} color="white"/>
        </a>
        </div>

        <div className="payment-link">
        <a href="">
          <FaApple size={25} color="white"/>
        </a>
        </div>

        <div className="payment-link">
        <a href="">
          <FaAmazonPay size={25} color="white"/>
        </a>
        </div>
      </div>
    </div>
                </div>
            </div>
        </div>
   
        <footer>
            <p>Created By <a href=" " target="_blank">CODE CRAFTERS TEAM</a> |
                &copy; 2023 All rights reserved</p>
        </footer>
       <div/>
    </div>
</div>

  );
}

export default About;