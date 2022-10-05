import React from "react";

const Product = ({ product }) => {
  return (
    <div className="border-amber-300 border p-5">
      <img className="w-" src={product.image} alt = {product.title}/>
      <h1>{product.title}</h1>
    </div>
  );
};

export default Product;
