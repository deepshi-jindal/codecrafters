import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import CardFeature from "../component/CardFeature";
import HomeCard from "../component/HomeCard";
import { GrPrevious, GrNext } from "react-icons/gr";
import FilterProduct from "../component/FilterProduct";
import AllProduct from "../component/AllProduct";
import { Link } from 'react-router-dom';
import { IconName } from "react-icons/fa";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { BsFillCcCircleFill } from 'react-icons/bs';
import { FaCcPaypal } from 'react-icons/fa';
import { SiPaytm } from 'react-icons/si';
import { FaApple } from 'react-icons/fa';
import { FaGooglePay } from 'react-icons/fa';
import { FaAmazonPay } from 'react-icons/fa';
import CountdownTimer from "../component/CountdownTimer";
import "./Home.css";
import map from "../component/map";
import Review from "../component/Review";
// import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'


const Home = () => {
  const productData = useSelector((state) => state.product.productList);
  const homeProductCartList = productData.slice(1, 5);
  const homeProductCartListVegetables = productData.filter(
    (el) => el.category === "vegetable",
    []
  );
  const loadingArray = new Array(4).fill(null);
  const loadingArrayFeature = new Array(10).fill(null);

  const slideProductRef = useRef();
  const nextProduct = () => {
    slideProductRef.current.scrollLeft += 200;
  };
  const preveProduct = () => {
    slideProductRef.current.scrollLeft -= 200;
  };

  const reviews = [
    {
      imageSrc: 'C:/Users/deeps/Desktop/website/yuvisir.jpg',
      name: 'Mr. Yuvraj Joshi',
      country: 'India',
      comment: 'I stumbled upon this vegetable and fruits website while searching for a reliable source of organic produce, and boy, am I impressed! ...',
    },
    {
      imageSrc: 'kavyaa.jpg',
      name: 'Ms. Kavya Srivastava',
      country: 'Malaysia',
      comment: 'As an adventurous cook, I am always on the lookout for unique and exotic fruits and vegetables. This website ...',
    },
    // Add more reviews here
  ];
  
  

 return (
    <div className="p-2 md:p-4">
      <div className="md:flex gap-4 py-2 home-section">
        <div className="md:w-1/2">
          <div className="flex gap-3 bg-slate-300 w-36 px-2 items-center rounded-full">
            <p className="text-sm font-medium text-slate-900">Fast Delivery</p>
            <img
              src="https://cdn-icons-png.flaticon.com/512/2972/2972185.png"
              className="h-7"
            />
          </div>
          <h2 className="my-heading text-4xl md:text-7xl font-bold py-3">
            Try fresh fruits with great
            discount and lead a
            healthy life.{" "}
            {/* <span className="text-red-600 text-">Your Home</span> */}
          </h2>
          <p className=" sd py-3 text-base ">
            These organic products are brought to you by Code Crafters!!!
          </p>
          <Link to="/signup">
          <button className="font-bold bg-green-500 text-slate-200 px-4 py-2 rounded-md">
            Order Now
          </button>
          </Link>
        </div>

        {/* <div className="md:w-1/2 flex flex-wrap gap-5 p-4 justify-center">
          {homeProductCartList[0]
            ? homeProductCartList.map((el) => {
                return (
                  <HomeCard
                    key={el._id}
                    id={el._id}
                    image={el.image}
                    name={el.name}
                    price={el.price}
                    category={el.category}
                  />
                );
              })
            : loadingArray.map((el, index) => {
                return <HomeCard key={index+"loading"} loading={"Loading..."} />;
              })}
        </div> */}
      </div>

      {/* <div className="">
         <div className="flex w-full items-center">
          <h2 className="font-bold text-2xl text-slate-800 mb-4">
            Fresh Vegetables
          </h2>
          <div className="ml-auto flex gap-4">
            <button
              onClick={preveProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg  p-1 rounded"
            >
              <GrPrevious />
            </button>
            <button
              onClick={nextProduct}
              className="bg-slate-300 hover:bg-slate-400 text-lg p-1 rounded "
            >
              <GrNext />
            </button>
          </div>
        </div> 
        <div
          className="flex gap-5 overflow-scroll scrollbar-none scroll-smooth transition-all"
          ref={slideProductRef}
        > 
          {homeProductCartListVegetables[0]
            ? homeProductCartListVegetables.map((el) => {
                return (
                  <CardFeature
                    key={el._id+"vegetable"}
                    id={el._id}
                    name={el.name}
                    category={el.category}
                    price={el.price}
                    image={el.image}
                  />
                );
              })
            : loadingArrayFeature.map((el,index) => (
                <CardFeature loading="Loading..." key={index+"cartLoading"} />
              ))}
         </div>
      </div> */}
      
      
     
  <AllProduct heading={"Available Products"} />

      <div className="countdown-container">
          <CountdownTimer />
   </div>



        

   <div className="review-container">
        
        <Review />
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
        <a href=" ">
        <FaGooglePay size={35} color="white"/>
        </a>
        </div>
        
        <div className="payment-link">
        <a href=" ">
        <FaCcPaypal size={25} color="white"/>
        </a>
        </div>

        <div className="payment-link">
        <a href=" ">
          <SiPaytm size={25} color="white"/>
        </a>
        </div>

        <div className="payment-link">
        <a href=" ">
          <FaApple size={25} color="white"/>
        </a>
        </div>

        <div className="payment-link">
        <a href=" ">
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

export default Home;
