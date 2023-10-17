// src/ParentComponent.js

import React from "react";
import HomeCard from "./HomeCard"; // Adjust the import path

import appleImage from "./assest/apple.jpg";
import bananaImage from "./assest/banana.jpg";
// Import other fruit images similarly

function ParentComponent() {
  const productData = [
    {
      id: 1,
      name: "Apple",
      image: appleImage, // Use the imported image
      category: "Fruits",
      price: 2.99,
      loading: false,
    },
    {
      id: 2,
      name: "Banana",
      image: bananaImage, // Use the imported image
      category: "Fruits",
      price: 1.99,
      loading: false,
    },
    // Add other product data similarly
  ];

  return (
    <div>
      {productData.map((product) => (
        <HomeCard
          key={product.id}
          id={product.id}
          name={product.name}
          image={product.image}
          category={product.category}
          price={product.price}
          loading={product.loading}
        />
      ))}
    </div>
  );
}

export default ParentComponent;
