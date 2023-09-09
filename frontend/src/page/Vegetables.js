import React, {useState} from 'react';
import "../css/Fruits.css";
import potato from "../assest/potato per kg - vegetables.jpg";
import cabbage from "../assest/cabbage.jpeg";
import onion from "../assest/onions.jpg";
import ladyfinger from "../assest/Lady Finger.jpg";
import lauki from "../assest/Lauki.jpg";
import capsicum from "../assest/capsicumm.png";
import tomato from "../assest/tomato.jpg";
import palak from "../assest/Palak.jpg";
import { useNavigate} from 'react-router-dom';

const VegetableCard = ({ food, addToCart }) => {
    return (
        <div className="food-card">
        <img src={food.image} alt={food.name} />
        <h3>{food.name}</h3>
        <p>Price: {food.price}</p>
        <button onClick={() => addToCart(food)}>Add to Cart</button>
        </div>
    );
};

const Vegetable = () => {
    const [cart, setCart] = useState([]); // Initialize an empty cart array
    const navigate = useNavigate(); 

    const addToCart = (food) => {
        // Check if the item is already in the cart
        const existingItem = cart.find((item) => item.id === food.id);

        if (existingItem) {
        // If it exists, increment the quantity
        existingItem.quantity += 1;
        setCart([...cart]);
        } else {
        // If it doesn't exist, add it to the cart with a quantity of 1
        setCart([...cart, { ...food, quantity: 1 }]);
        }
    };


    const fruits = [
        {
        id: 1,
        name: 'Potato',
        price: '$1.00',
        image: potato, // Replace with actual image URL
        },
        {
        id: 2,
        name: 'Cabbage',
        price: '$4.00',
        image: cabbage, // Replace with actual image URL
        },
        {
        id: 3,
        name: 'Onion',
        price: '$12.00',
        image: onion, // Replace with actual image URL
        },
        {
        id: 4,
        name: 'Lady Finger',
        price: '$0.50',
        image: ladyfinger, // Replace with actual image URL
        },
        {
        id: 5,
        name: 'Lauki',
        price: '$0.50',
        image: lauki, // Replace with actual image URL
        },
        {
        id: 6,
        name: 'Capsicum',
        price: '$0.50',
        image: capsicum, // Replace with actual image URL
        },
        {
        id: 7,
        name: 'Palak',
        price: '$0.50',
        image: palak, // Replace with actual image URL
        },
        {
        id: 8,
        name: 'Tomato',
        price: '$0.50',
        image: tomato, // Replace with actual image URL
        }
    ];

    return (
        <div className="app">
            <div className="banner">
                <img src="https://www.jiomart.com/images/category/229/fresh-vegetables-20220519.jpeg" alt="Banner" />
            </div>
            <div className="food-container">
                {fruits.map((food) => (
                <VegetableCard key={food.id} food={food} addToCart={addToCart} />
                ))}
            </div>
        </div>
    );

};

export default Vegetable;