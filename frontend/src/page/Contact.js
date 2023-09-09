
import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import './Contact.css';
import emailjs from 'emailjs-com';
import { Link } from 'react-router-dom';
import { FaCcPaypal } from 'react-icons/fa';
import { SiPaytm } from 'react-icons/si';
import { FaApple } from 'react-icons/fa';
import { FaGooglePay } from 'react-icons/fa';
import { FaAmazonPay } from 'react-icons/fa';

const Contact = () => {
  const validateForm = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const fname = document.getElementById('fname').value;
    const lname = document.getElementById('lname').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (fname === '' || lname === '' || email === '' || message === '') {
      alert('Please fill in all fields.');
      return false;
    }

    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return false;
    }

    // Handle form submission logic here (e.g., sending data to a server)

    alert('Form submitted successfully!'); // You can replace this with your desired success message
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = (e) => {
    e.preventDefault();

     // Get user's input values
  const formData = new FormData(e.target);
  const firstName = formData.get('fname');
  const lastName = formData.get('lname');
  const userEmail = formData.get('email');
  const userMessage = formData.get('message');

  // Define the email parameters
  const emailParams = {
    to_email: 'recipient@example.com', // Replace with the recipient's email address
    subject: 'Contact Form Submission',
    user_first_name: firstName,
    user_last_name: lastName,
    user_email: userEmail,
    user_message: userMessage,
  };


    emailjs.sendForm('service_oxdg0zb', 'template_lmn6qaf', e.target, 'LON4HsVmIaYN13Mb1')
      .then((result) => {
        console.log(result.text);
        alert('Email sent successfully!');
      })
      .catch((error) => {
        console.error(error);
        alert('Email could not be sent. Please try again later.');
      });
  };

  return (
    <div className="contact-section" id="contact">
      <div className="image-area"></div>
      <div className="form-area">
        <div className="form-wrap">
          <div className="title">
            <h1>Contact Us</h1>
          </div>

          <div className="contact-area">
            {/* <div className="contact-info"> */}
              {/* <h2>Information</h2> */}
              {/* <div className="contact-address">
                <span className="fa-solid fa-location-dot" style={{ color: '#0b4200' }}></span>
                <p>Graphic Era University,<br />Bell Road, Clement Town</p>
              </div> */}

              {/* <div className="contact-mail">
                <span className="fa-solid fa-envelope" style={{ color: '#0b4200' }}></span>
                <p>codecrafters@gmail.com</p>
              </div> */}

              {/* <div className="contact-phone">
                <span className="fa-solid fa-phone" style={{ color: '#0b4200' }}></span>
                <p>+91 98974XXXXX</p>
              </div> */}
            {/* </div> */}

            <form className="contact-form" onSubmit={sendEmail}>
              <div className="name-field">
                <div className="input-area">
                <label htmlFor="fname">First Name</label>
                  <input type="text" id="fname" autoComplete="off" required />
                 
                </div>

                <div className="input-area">
                <label htmlFor="lname">Last Name</label>
                  <input type="text" id="lname" autoComplete="off" required />
                 
                </div>
              </div>

              <div className="input-area">
              <label htmlFor="email">Email</label>
                <input type="email" id="email" autoComplete="off" required />
               
              </div>

              <div className="message-area">
              <label htmlFor="message">Message</label>
                <textarea id="message" required></textarea>
               
              </div>

              <div className="btn">
                <button type="submit">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    
  );
};

export default Contact;

