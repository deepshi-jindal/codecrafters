

// export default Prediction;
// from flask import Flask, jsonify, request
// import your_python_script  # Import your Python script

// app = Flask(__name__)

// @app.route('/predict', methods=['POST'])
import React, { useState } from 'react';
import './Prediction.css'; // Ensure the CSS file name matches
import { Link } from 'react-router-dom';
// Import the JSON data
import jsonData from './vegetable.json'; // Adjust the path as needed
import { FaCcPaypal } from 'react-icons/fa';
import { SiPaytm } from 'react-icons/si';
import { FaApple } from 'react-icons/fa';
import { FaGooglePay } from 'react-icons/fa';
import { FaAmazonPay } from 'react-icons/fa';

const Prediction = () => {
  const [location, setLocation] = useState('');
  const [vegetable, setVegetable] = useState('');
  const [date, setDate] = useState('');
  const [predictedPrice, setPredictedPrice] = useState('');
  const [predictions, setPredictions] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Filter the data based on user inputs
      const filteredData = jsonData.filter((item) => {
        return (
          item.Location.toLowerCase() === location.toLowerCase() && // Case insensitive comparison
          item.Vegetable.toLowerCase() === vegetable.toLowerCase() && // Case insensitive comparison
          item.Date === date
        );
      });

      if (filteredData.length === 0) {
        setPredictedPrice('Price 25 per kg.');
        setPredictions([]); // Clear previous predictions if any
        console.log('Filtered data:', filteredData); // Log filtered data for debugging
        return;
      }

      // Calculate the average price
      let totalPrices = 0;
      for (const item of filteredData) {
        totalPrices += item['Price per kg'];
      }
      const averagePrice = totalPrices / filteredData.length;

      setPredictedPrice(`Price per kg: Rs.${averagePrice.toFixed(2)}`);
      setPredictions([]); // Clear previous predictions if any
      console.log('Filtered data:', filteredData); // Log filtered data for debugging
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='main'>
    <div className="main-container">
      {/* <header className="header">
     
      </header> */}
      <section className="prediction">
        <div className="container">
          <div className="prediction-content">
            <form onSubmit={handleSubmit} className="signup-form">
              <h2 className="form-title">Check the price</h2>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  name="location"
                  placeholder="Enter the Location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  className="form-input"
                  name="vegetable"
                  placeholder="Enter the vegetable"
                  value={vegetable}
                  onChange={(e) => setVegetable(e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="date"
                  className="form-input"
                  name="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
              </div>
              <div className="form-group" style={{ textAlign: 'center', marginTop: '5px' }}>
                <button type="submit" name="submit" className="form-submit">
                  Predict
                </button>
              </div>
            </form>
            <div className="results">
              <p className="predicted-price">{predictedPrice}</p>
              <ul className="predictions">
                {predictions.map((prediction, index) => (
                  <li key={index}>{prediction}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        </section>
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
};

export default Prediction;


