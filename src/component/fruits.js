// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import CardFeature from "./CardFeature";
// import FilterProduct from "./FilterProduct";

// const Fruits = ({ heading }) => {
//   const productData = useSelector((state) => state.product.productList);
//   const categoryList = [...new Set(productData.map((el) => el.category))];

//   //filter data display
//   const [filterby, setFilterBy] = useState("");
//   const [dataFilter, setDataFilter] = useState([]);

//   useEffect(() => {
//     setDataFilter(productData);
//   }, [productData]);

//   const handleFilterProduct = (category) => {
//     setFilterBy(category)
//     const filter = productData.filter(
//       (el) => el.category.toLowerCase() === category.toLowerCase()
//     );
//     setDataFilter(() => {
//       return [...filter];
//     });
//   };

//   const loadingArrayFeature = new Array(10).fill(null);

//   return (
//     <div className="my-5">
//       <h2 className="font-bold text-2xl text-slate-800 mb-4">{heading}</h2>

//       <div className="flex gap-4 justify-center overflow-scroll scrollbar-none">
//         {categoryList[0] ? (
//           categoryList.map((el) => {
//             return (
//               <FilterProduct
//                 category={el}
//                 key={el}
//                 isActive={el.toLowerCase() === filterby.toLowerCase()}
//                 onClick={() => handleFilterProduct(el)}
//               />
//             );
//           })
//         ) : (
//           <div className="min-h-[150px] flex justify-center items-center">
//             <p>Loading...</p>
//           </div>
//         )}
//       </div>

//       <div className="flex flex-wrap justify-center gap-4 my-4">
//         {dataFilter[0]
//           ? dataFilter.map((el) => {
//               return (
//                 <CardFeature
//                   key={el._id}
//                   id={el._id}
//                   image={el.image}
//                   name={el.name}
//                   category={el.category}
//                   price={el.price}
//                 />
//               );
//             })
//           : 
//           loadingArrayFeature.map((el,index) => (
//               <CardFeature loading="Loading..." key={index+"Fruits"} />
//             ))}
//       </div>
//     </div>
//   );
// };

// export default Fruits;

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import AllProduct from "../component/AllProduct";
import { addCartItem } from "../redux/productSlide";

const Menu = () => {
  const { filterby } = useParams();
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const productData = useSelector((state) => state.product.productList);

  const productDisplay = productData.filter((el) => el._id === filterby)[0];

  const handleAddCartProduct = (e) => {
    dispatch(addCartItem(productDisplay))
  };

  const handleBuy = ()=>{
    dispatch(addCartItem(productDisplay))
      navigate("/cart")
  }
  return (
    <div className="p-2 md:p-4">
      <div className="w-full max-w-4xl m-auto md:flex bg-white">
        <div className="max-w-sm  overflow-hidden w-full p-5">
          <img src={productDisplay.image}
            className="hover:scale-105 transition-all h-full" alt="Fresh Fruits and Vegetables"
          />
        </div>
        <div className="flex flex-col gap-1">
          <h3 className="font-semibold text-slate-600  capitalize text-2xl md:text-4xl">
            {productDisplay.name}
          </h3>
          <p className=" text-slate-500  font-medium text-2xl">{productDisplay.category}</p>
          <p className=" font-bold md:text-2xl">
            <span className="text-red-500 ">₹</span>
            <span>{productDisplay.price}</span>
          </p>
          <div className="flex gap-3">
          <button onClick={handleBuy} className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]">Buy</button>
          <button onClick={handleAddCartProduct} className="bg-yellow-500 py-1 mt-2 rounded hover:bg-yellow-600 min-w-[100px]">Add Cart</button>
          </div>
          <div>
            <p className="text-slate-600 font-medium">Description : </p>
            <p>{productDisplay.description}</p>
          </div>
        </div>
      </div>

      <AllProduct heading={"Related Product"}/>
    </div>
  );
};

export default Menu;
