import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../component/cartProduct";
import emptyCartImage from "../assest/empty.gif"
import { toast } from "react-hot-toast";
import {loadStripe} from '@stripe/stripe-js';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import { FaCcPaypal } from 'react-icons/fa';
import { SiPaytm } from 'react-icons/si';
import { FaApple } from 'react-icons/fa';
import { FaGooglePay } from 'react-icons/fa';
import { FaAmazonPay } from 'react-icons/fa';

const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  const user = useSelector(state => state.user)
  const navigate = useNavigate()

  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );

  
  
  const handlePayment = async()=>{

      if(user.email){
          
          const stripePromise = await loadStripe(process.env.REACT_APP_STRIPE_PUBLIC_KEY)
          const res = await fetch(`${process.env.REACT_APP_SERVER_DOMIN}/create-checkout-session`,{
            method : "POST",
            headers  : {
              "content-type" : "application/json"
            },
            body  : JSON.stringify(productCartItem)
          })
          if(res.statusCode === 500) return;

          const data = await res.json()
          console.log(data)

          toast("Redirect to payment Gateway...!")
          stripePromise.redirectToCheckout({sessionId : data}) 
      }
      else{
        toast("You have not Login!")
        setTimeout(()=>{
          navigate("/login")
        },1000)
      }
    
  }
  return (
    <>
    
      <div className="p-2 md:p-4">
        <h2 className="text-lg md:text-2xl font-bold text-slate-600">
          Your Cart Items
        </h2>

        {productCartItem[0] ?
        <div className="my-4 flex gap-3">
          {/* display cart items  */}
          <div className="w-full max-w-3xl ">
            {productCartItem.map((el) => {
              return (
                <CartProduct
                  key={el._id}
                  id={el._id}
                  name={el.name}
                  image={el.image}
                  category={el.category}
                  qty={el.qty}
                  total={el.total}
                  price={el.price}
                />
              );
            })}
          </div>

          {/* total cart item  */}
          <div className="w-full max-w-md  ml-auto">
            <h2 className="bg-green-500 text-white p-2 text-lg">Summary</h2>
            <div className="flex w-full py-2 text-lg border-b">
              <p>Total Qty :</p>
              <p className="ml-auto w-32 font-bold">{totalQty}</p>
            </div>
            <div className="flex w-full py-2 text-lg border-b">
              <p>Total Price</p>
              <p className="ml-auto w-32 font-bold">
                <span className="text-red-500">₹</span> {totalPrice}
              </p>
            </div>
            <button className="bg-green-500 w-full text-lg font-bold py-2 text-white" onClick={handlePayment}>
              Payment
            </button>
          </div>
        </div>

        : 
        <>
          <div className="flex w-full justify-center items-center flex-col">
            <img src={emptyCartImage} className="w-full max-w-sm"/>
            <p className="text-slate-500 text-3xl font-bold">Empty Cart</p>
          </div>
        </>
      }
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
    
    </>
  );
};

export default Cart;
