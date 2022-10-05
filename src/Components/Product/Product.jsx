import React from "react";
import "./Product.css"

const Product = ({ product }) => {
  const {title, price, description, category} = product
  return (
    <div className="border-amber-300 border rounded-md   h-full ">
      <div className="product  pt-5 px-5 flex flex-col items-center ">

      <img className="p-5" src={product.image} alt = {product.title}/>
      <div className="product_info">
      <h1>Title: {title}</h1>
      <h1>Price: {price}</h1>
      <h1>Description: {description.length === 100 ? description : description.slice(0, 100) } ....</h1>
      <h1>{category}</h1>
      </div>
      
      </div>
      
      <button className="w-full bg-orange-400 text-lg text-white rounded-md  p-1 mb-0">Add To Cart</button>
    </div>
  );
};

export default Product;
